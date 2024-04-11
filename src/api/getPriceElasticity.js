export default async function getPriceElasticity(storeId, itemId, yearId) {
  try {
    console.log(storeId, itemId, yearId);
    const response = await fetch(
      `http://127.0.0.1:5000/get-price-elasticity?storeId=${storeId}&itemId=${itemId}&yearId=${yearId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}

// Call the API function with the desired parameter
