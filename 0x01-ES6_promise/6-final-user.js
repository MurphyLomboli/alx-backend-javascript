import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

// Define the handleProfileSignup function
export const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    // Call the signUpUser and uploadPhoto functions
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    // Wait for all promises to be settled
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    // Return the array with status and value/error of each promise
    return [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.value },
    ];
  } catch (error) {
    // Handle any errors that occurred during the promise settlement
    console.error('Error:', error);
    throw error; // Optionally rethrow the error to be caught by the caller of handleProfileSignup
  }
};
