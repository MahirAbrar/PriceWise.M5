import axios from "axios";

export default async function getItems(parameter) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/get-items/${parameter}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getItems:", error);
    throw error;
  }
}
