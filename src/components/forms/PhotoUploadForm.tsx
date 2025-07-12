
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Camera, Upload } from 'lucide-react';

const photoSchema = z.object({
  child_name: z.string().min(2, 'Child name must be at least 2 characters'),
  description: z.string().optional(),
  parent_email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
});

type PhotoFormData = z.infer<typeof photoSchema>;

interface PhotoUploadFormProps {
  onClose?: () => void;
}

export const PhotoUploadForm = ({ onClose }: PhotoUploadFormProps) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      form.reset();
      setSelectedFile(null);
      setPreviewUrl(null);
      onClose?.();
    }
  });

  const form = useForm<PhotoFormData>({
    resolver: zodResolver(photoSchema),
    defaultValues: {
      child_name: '',
      description: '',
      parent_email: '',
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('File size must be less than 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const uploadPhoto = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { error: uploadError, data } = await supabase.storage
      .from('kids-photos')
      .upload(fileName, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('kids-photos')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const onSubmit = async (data: PhotoFormData) => {
    if (!selectedFile) {
      toast.error('Please select a photo to upload');
      return;
    }

    setUploading(true);
    try {
      const photoUrl = await uploadPhoto(selectedFile);
      
      const formData = {
        ...data,
        photo_url: photoUrl,
        parent_email: data.parent_email || null,
      };
      
      await submitForm('photo_uploads', formData);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload photo. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {previewUrl ? (
            <div className="space-y-4">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-w-full max-h-48 mx-auto rounded-lg"
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                }}
              >
                Choose Different Photo
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Camera className="h-12 w-12 mx-auto text-gray-400" />
              <div>
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="text-lg font-medium text-gray-700 mb-2">
                    Upload a Photo
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    PNG, JPG, GIF up to 5MB
                  </div>
                  <Button type="button" variant="outline" className="mx-auto">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Photo
                  </Button>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>
          )}
        </div>

        <FormField
          control={form.control}
          name="child_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter child's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parent_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent/Guardian Email (Optional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="parent@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo Description (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about this photo..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          disabled={isSubmitting || uploading || !selectedFile}
        >
          {uploading ? 'Uploading...' : isSubmitting ? 'Saving...' : 'Upload Photo! 📸'}
        </Button>
      </form>
    </Form>
  );
};
