# Supabase Integration Setup Guide

Your ProjectBrief form is now integrated with Supabase! Follow these steps to complete the setup.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in with your account
3. Click **"New Project"** and fill in:
   - **Project Name**: `vaportfolio` (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your location
4. Click **Create new project** and wait 2-3 minutes for it to initialize

## Step 2: Get Your API Credentials

1. Once project is created, click **Settings** (bottom left)
2. Click **API** in the left sidebar
3. Copy these two values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")

## Step 3: Create the Database Table

1. In Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy and paste the entire contents of `SUPABASE_MIGRATION.sql` from your project root
4. Click **Run** button to execute the SQL
5. You should see a success message and a new `project_briefs` table in the **Table Editor**

## Step 4: Configure Environment Variables

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.example` or paste:
   ```
   VITE_SUPABASE_URL=your_project_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```
3. Replace the placeholders with your actual credentials from Step 2
4. Save the file

**⚠️ Important**: Never commit `.env.local` to Git (it's in `.gitignore`)

## Step 5: Test the Form Locally

1. Run your dev server:

   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:5174 and click **"Project Brief"** in the navigation
    
3. Fill out the form with test data and click **Submit Project Brief**

4. You should see:
   - Loading state ("Submitting...")
   - Success message
   - Form clears automatically

5. Go back to Supabase dashboard → **Table Editor** → Select `project_briefs` table
   - You should see your test submission!

## Step 6: Optional - Email Notifications

To receive an email when someone submits a form:

### Option A: Using Supabase Realtime + Edge Function (Advanced)

This requires creating a Supabase Edge Function that triggers on new inserts.

### Option B: Using Zapier (Simple & Free)

1. Go to [https://zapier.com](https://zapier.com)
2. Create a new Zap with:
   - **Trigger**: Supabase → New Row
   - **Action**: Gmail → Send Email
3. Connect your Supabase project and configure email template

### Option C: Manual Check (Free)

- Periodically check the Supabase dashboard `project_briefs` table for new submissions

## Step 7: Deploy to Production

1. Add environment variables to your hosting platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Other**: Check your provider's documentation

2. Add the same two variables:

   ```
   VITE_SUPABASE_URL = your_project_url
   VITE_SUPABASE_ANON_KEY = your_anon_key
   ```

3. Redeploy your site

## Troubleshooting

### "Form submissions will not be saved" Message

- Check that `.env.local` exists and has correct credentials
- Verify VITE_SUPABASE_URL doesn't have trailing slash
- Browser console may show specific error messages

### "Failed to submit form" Error

- Check that the `project_briefs` table was created (see Step 3)
- Verify your Supabase project is active (not paused)
- Check the browser console for detailed error messages

### Credentials Not Working

- Double-check you copied the **anon public** key (not service_role)
- Make sure there are no extra spaces or line breaks
- Project must be in "Active" state (not "Paused")

## File Structure

Your new Supabase integration files:

```
src/
  services/
    supabase.js              # ← Supabase client and API functions
  components/
    ProjectBrief.jsx         # ← Updated with Supabase integration

.env.local                   # ← Your credentials (create this)
.env.local.example           # ← Template for reference
SUPABASE_MIGRATION.sql       # ← SQL to create the table
```

## Security Notes

✅ **What's Secure:**

- Anon key is public and safe to expose (it's in your code)
- Row Level Security can be enabled later for additional protection
- Database is automatically encrypted

⚠️ **What to Protect:**

- Never share your service_role key (different from anon key)
- Keep `.env.local` out of version control
- For sensitive data, implement RLS policies

## What Happens When Someone Submits

1. Form data is sent to your Supabase database
2. Record is stored in `project_briefs` table with:
   - All 24 form fields
   - Automatic timestamp (`created_at`)
   - Unique ID for each submission

3. User sees success message
4. Form clears and resets
5. You can view submissions in Supabase dashboard anytime

## Next Steps

1. ✅ Create Supabase project
2. ✅ Copy API credentials
3. ✅ Run the SQL migration
4. ✅ Create `.env.local` file
5. ✅ Test locally
6. ✅ Deploy to production
7. ✅ Monitor submissions in Supabase dashboard

---

**Questions?** Check the Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
