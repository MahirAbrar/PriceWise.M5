// Define the function to make the API call
export default async function getItems(parameter) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/get-items/${parameter}`
    );
    const data = await response.json();
    // Process the data returned from the API call
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    return error;
  }
}

// Call the API function with the desired parameter
