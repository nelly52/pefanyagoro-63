
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const callbackData = await req.json();
    console.log("M-Pesa Callback Data:", JSON.stringify(callbackData, null, 2));

    const { Body } = callbackData;
    const { stkCallback } = Body;

    const {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata
    } = stkCallback;

    let transactionId = null;
    let phoneNumber = null;
    let amount = null;

    // Extract transaction details from callback metadata
    if (CallbackMetadata && CallbackMetadata.Item) {
      const items = CallbackMetadata.Item;
      
      for (const item of items) {
        switch (item.Name) {
          case "MpesaReceiptNumber":
            transactionId = item.Value;
            break;
          case "PhoneNumber":
            phoneNumber = item.Value;
            break;
          case "Amount":
            amount = item.Value;
            break;
        }
      }
    }

    // Update transaction status in database
    const { error: updateError } = await supabase
      .from("mpesa_transactions")
      .update({
        result_code: ResultCode.toString(),
        result_desc: ResultDesc,
        transaction_id: transactionId,
        status: ResultCode === 0 ? "completed" : "failed",
        updated_at: new Date().toISOString(),
      })
      .eq("checkout_request_id", CheckoutRequestID);

    if (updateError) {
      console.error("Failed to update transaction:", updateError);
    }

    console.log(`Transaction ${CheckoutRequestID} updated with status: ${ResultCode === 0 ? "completed" : "failed"}`);

    return new Response(JSON.stringify({ 
      message: "Callback processed successfully" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Callback processing error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to process callback" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
