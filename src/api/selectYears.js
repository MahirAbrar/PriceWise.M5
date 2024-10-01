import axios from "axios";

export default async function getYear(storeId, itemId, eventBool, snapBool) {
  try {
    const response = await axios.get("http://127.0.0.1:5000/get-year", {
      params: {
        storeId,
        itemId,
        event: eventBool,
        snap: snapBool,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in getYear:", error);
    throw error;
  }
}
