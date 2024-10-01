import axios from "axios";

export default async function getPriceDiscount(
  storeId,
  itemId,
  yearId,
  discount = 0,
  eventBool,
  snapBool,
  eventValue,
  snapValue
) {
  try {
    const response = await axios.get(
      "http://127.0.0.1:5000/get-price-discount",
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
    console.error("Error in getPriceDiscount:", error);
    throw error;
  }
}
