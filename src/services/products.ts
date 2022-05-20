import api from "../config/api";

export async function getAllProducts() {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
}
