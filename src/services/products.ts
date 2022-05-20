import { ProductProps } from "../@types/interfaces";
import api from "../config/api";

export async function getAllProducts() {
  try {
    const response = await api.get("/products");

    return response.data as ProductProps[];
  } catch (error) {
    throw error;
  }
}
