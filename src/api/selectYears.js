export default async function getYear(storeId, itemId, eventBool, snapBool) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/get-year?storeId=${storeId}&itemId=${itemId}&event=${eventBool}&snap=${snapBool}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Call the API function with the desired parameter
