export default async function getPriceElasticity(
  storeId,
  itemId,
  yearId,
  discount,
  eventBool,
  snapBool,
  eventValue,
  snapValue
) {
  try {
    // if discount is undefined then set discount to 60
    if (discount === undefined) {
      discount = 0;
    }
    const response = await fetch(
      `http://127.0.0.1:5000/get-price-discount?storeId=${storeId}&itemId=${itemId}&yearId=${yearId}&disId=${discount}&event=${eventBool}&snap=${snapBool}&eventCount=${eventValue}&snapCount=${snapValue}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Call the API function with the desired parameter
