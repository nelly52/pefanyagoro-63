
-- Create a table to store M-Pesa transactions
CREATE TABLE public.mpesa_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  reference TEXT NOT NULL,
  description TEXT,
  transaction_id TEXT UNIQUE,
  checkout_request_id TEXT,
  merchant_request_id TEXT,
  status TEXT DEFAULT 'pending',
  result_code TEXT,
  result_desc TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.mpesa_transactions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert transactions (for donations)
CREATE POLICY "Allow public mpesa transactions" 
  ON public.mpesa_transactions 
  FOR INSERT 
  WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_mpesa_checkout_request_id ON public.mpesa_transactions(checkout_request_id);
CREATE INDEX idx_mpesa_transaction_id ON public.mpesa_transactions(transaction_id);
