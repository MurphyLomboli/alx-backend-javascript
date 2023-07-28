// main.js

// Import the required functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

// Define the async function asyncUploadUser
const asyncUploadUser = async (photo, userData) => {
  try {
    // Call the uploadPhoto function and createUser function
    const photoResponse = await uploadPhoto(photo);
    const userResponse = await createUser(userData);

    // Return the object with the responses
    return {
	    photo: response_from_uploadPhoto_function,
	    user: response_from_createUser_function,
    };
  } catch (error) {
	  photo: null,
		  user: null,
  }
};
