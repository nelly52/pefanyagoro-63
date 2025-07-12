
-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for workshop registrations
CREATE TABLE public.workshop_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  workshop_type TEXT NOT NULL,
  preferred_date TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for program applications
CREATE TABLE public.program_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  program_type TEXT NOT NULL,
  age TEXT,
  experience TEXT,
  motivation TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for kids stories
CREATE TABLE public.kids_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_name TEXT NOT NULL,
  age INTEGER,
  story TEXT NOT NULL,
  parent_email TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create table for photo uploads (metadata)
CREATE TABLE public.photo_uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_name TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  description TEXT,
  parent_email TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workshop_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.program_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kids_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.photo_uploads ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for submissions (since these are public forms)
CREATE POLICY "Allow public submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public workshop registrations" ON public.workshop_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public program applications" ON public.program_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public kids stories" ON public.kids_stories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public photo uploads" ON public.photo_uploads FOR INSERT WITH CHECK (true);

-- Create storage bucket for photo uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('kids-photos', 'kids-photos', true);

-- Create storage policy for public uploads
CREATE POLICY "Allow public photo uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'kids-photos');
CREATE POLICY "Allow public photo access" ON storage.objects FOR SELECT USING (bucket_id = 'kids-photos');
