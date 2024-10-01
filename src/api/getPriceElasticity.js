import axios from "axios";

export async function getPriceElasticity(
  storeId,
  itemId,
  yearId,
  discount = 60,
  eventBool,
  snapBool,
  eventValue,
  snapValue
) {
  try {
    const response = await axios.get(
      "http://127.0.0.1:5000/get-price-elasticity",
      {
        params: {
          storeId,
          itemId,
          yearId,
          disId: discount,
          event: eventBool,
          snap: snapBool,
          eventCount: eventValue,
          snapCount: snapValue,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in getPriceElasticity:", error);
    throw error;
  }
}
