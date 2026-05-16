-- Project Briefs Table
-- This table stores all project brief submissions from the form

CREATE TABLE IF NOT EXISTS project_briefs (
  -- Core metadata
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  -- Basic Information
  full_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  
  -- Organization Details
  organization_type TEXT,
  mission_statement TEXT,
  primary_goal TEXT,
  social_media TEXT,
  
  -- Hosting & Domain
  has_hosting TEXT,
  domain_credentials TEXT,
  hosting_credentials TEXT,
  
  -- Design Preferences
  wordpress_themes TEXT,
  design_preference TEXT,
  navigation_items TEXT,
  sample_websites TEXT,
  preferred_tone TEXT,
  call_to_action_buttons TEXT,
  
  -- Brand & Styling
  brand_colors TEXT,
  google_fonts TEXT,
  logo_format TEXT,
  
  -- Content & Features
  contact_form_fields TEXT,
  social_proof TEXT,
  
  -- Additional Files
  design_file TEXT,
  additional_info TEXT
);

-- Create index on email for quick lookups
CREATE INDEX IF NOT EXISTS project_briefs_email_idx ON project_briefs(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS project_briefs_created_at_idx ON project_briefs(created_at DESC);

-- Enable Row Level Security (optional, for added security)
-- ALTER TABLE project_briefs ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert (submissions from form)
-- CREATE POLICY "Allow public insert" ON project_briefs
--   FOR INSERT WITH CHECK (true);

-- Create a policy to view own submission
-- CREATE POLICY "Users can view their own submission" ON project_briefs
--   FOR SELECT USING (auth.email() = email OR true);
