import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found. Form submissions will not be saved to the database.",
  );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

/**
 * Submit a project brief form to Supabase
 * @param {Object} formData - The form data object
 * @returns {Promise<Object>} - { success: boolean, message: string, data: any, error: any }
 */
export async function submitProjectBrief(formData) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return {
        success: false,
        message:
          "Database connection not configured. Please contact the admin.",
        data: null,
        error: "Missing Supabase credentials",
      };
    }

    const { data, error } = await supabase
      .from("project_briefs")
      .insert([
        {
          full_name: formData.fullName,
          mobile_number: formData.mobileNumber,
          email: formData.email,
          company_name: formData.companyName,
          organization_type: formData.organizationType,
          mission_statement: formData.missionStatement,
          primary_goal: formData.primaryGoal,
          social_media: formData.socialMedia,
          has_hosting: formData.hasHosting,
          domain_credentials: formData.domainCredentials,
          hosting_credentials: formData.hostingCredentials,
          wordpress_themes: formData.wordpressThemes,
          design_preference: formData.designPreference,
          navigation_items: formData.navigationItems,
          sample_websites: formData.sampleWebsites,
          preferred_tone: formData.preferredTone,
          call_to_action_buttons: formData.callToActionButtons,
          brand_colors: formData.brandColors,
          google_fonts: formData.googleFonts,
          logo_format: formData.logoFormat,
          contact_form_fields: formData.contactFormFields,
          social_proof: formData.socialProof,
          design_file: formData.designFile,
          additional_info: formData.additionalInfo,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
        data: null,
        error: error.message,
      };
    }

    return {
      success: true,
      message: "Project brief submitted successfully!",
      data: data,
      error: null,
    };
  } catch (err) {
    console.error("Submission error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      data: null,
      error: err.message,
    };
  }
}

/**
 * Fetch all project briefs (admin use only)
 * @returns {Promise<Array>} - Array of project brief records
 */
export async function getAllProjectBriefs() {
  try {
    const { data, error } = await supabase
      .from("project_briefs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

/**
 * Fetch a single project brief by ID
 * @param {string} id - The project brief ID
 * @returns {Promise<Object>} - The project brief record
 */
export async function getProjectBriefById(id) {
  try {
    const { data, error } = await supabase
      .from("project_briefs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
