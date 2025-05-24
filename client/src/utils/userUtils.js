/**
 * Utility functions for user management
 */

// Check if the user just logged in and handle special actions
export const handleLoginTransition = () => {
  const justLoggedIn = sessionStorage.getItem('justLoggedIn');
  
  if (justLoggedIn === 'true') {
    console.log('Detected login transition, applying profile picture');
    
    // Get the profile pic URL that was set during login
    const profilePicUrl = sessionStorage.getItem('profilePicUrl');
    
    if (profilePicUrl && profilePicUrl !== 'null' && profilePicUrl !== 'undefined') {
      // Ensure it's in localStorage (redundant but safe)
      localStorage.setItem('userProfilePic', profilePicUrl);
      
      // Force a custom event to update the navbar
      setTimeout(() => {
        const event = new CustomEvent('forceProfileUpdate', {
          detail: { photoUrl: profilePicUrl }
        });
        window.dispatchEvent(event);
      }, 100);
    } else {
      console.log('No valid profile picture URL found in session');
    }
    
    // Clear the flag
    sessionStorage.removeItem('justLoggedIn');
    sessionStorage.removeItem('profilePicUrl');
  }
};

/**
 * Properly formats a profile picture URL from the database
 * @param {string} url - The raw URL from the database
 * @returns {string} - The properly formatted URL
 */
export const formatProfilePicUrl = (url) => {
  if (!url) return null;
  
  // If it's already a complete URL, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Otherwise, prepend the API base URL
  return `http://localhost:5000${url.startsWith('/') ? '' : '/'}${url}`;
};

/**
 * Updates the user's profile picture in local storage and triggers an update
 * @param {string} url - The new profile picture URL
 */
export const updateUserProfilePic = (url) => {
  if (!url) return;
  
  const formattedUrl = formatProfilePicUrl(url);
  
  // Update in localStorage
  localStorage.setItem('userProfilePic', formattedUrl);
  
  // Dispatch events to update UI components
  try {
    const updateEvent = new CustomEvent('userPhotoUpdate', { 
      detail: { photoUrl: formattedUrl }
    });
    window.dispatchEvent(updateEvent);
  } catch (e) {
    console.error('Error dispatching profile update event:', e);
  }
};

/**
 * Loads the user's profile picture from all possible sources
 * @returns {string} The URL of the profile picture or default
 */
export const loadUserProfilePic = (defaultPic = null) => {
  // Check localStorage first
  const storedPic = localStorage.getItem('userProfilePic');
  if (storedPic && storedPic !== 'null' && storedPic !== 'undefined') {
    return storedPic;
  }
  
  // Then check user object
  try {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      if (user.fotoUrl) {
        const formattedUrl = formatProfilePicUrl(user.fotoUrl);
        // Cache it for future use
        localStorage.setItem('userProfilePic', formattedUrl);
        return formattedUrl;
      }
    }
  } catch (e) {
    console.error('Error parsing user data for profile pic:', e);
  }
  
  // Return default if nothing found
  return defaultPic;
};
