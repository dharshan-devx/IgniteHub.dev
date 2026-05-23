import { neon } from '@neondatabase/serverless';

const neonDbUrl = import.meta.env.VITE_NEON_DB_URL;

if (!neonDbUrl) {
  console.warn('Neon database URL not configured. Contact form will use fallback email service.');
}

// Create the sql connection function
export const sql = neonDbUrl ? neon(neonDbUrl) : null;

// Helper function to check if Neon is properly configured
export const isNeonConfigured = () => {
  return !!neonDbUrl && neonDbUrl.startsWith('postgresql://');
};

// Helper function to test Neon connection with enhanced error handling
export const testNeonConnection = async () => {
  if (!isNeonConfigured() || !sql) {
    console.log('Neon not configured, skipping connection test');
    return false;
  }

  try {
    console.log('Testing Neon connection...');
    
    // Test the connection with a simple query
    await sql`SELECT 1 as connected`;
    
    console.log('Neon connection test successful');
    return true;
  } catch (error: any) {
    console.error('Neon connection test failed:', {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint
    });
    
    // Provide user-friendly error messages based on common issues
    if (error.message?.includes('Failed to fetch') || error.message?.includes('network')) {
      console.error('Network error: Unable to reach Neon. Check internet connection and URL.');
    } else if (error.message?.includes('CORS')) {
      console.error('CORS error: Check Neon project CORS settings.');
    } else if (error.message?.includes('password authentication failed')) {
      console.error('Authentication error: Check your database password.');
    }
    
    return false;
  }
};
