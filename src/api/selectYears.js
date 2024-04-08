export default async function getYear(storeId, itemId) {
  try {
    console.log(storeId, itemId);
    const response = await fetch(
      `http://127.0.0.1:5000/get-year?storeId=${storeId}&itemId=${itemId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Call the API function with the desired parameter
