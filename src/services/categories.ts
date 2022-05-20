import api from "../config/api";

export async function getAllCategories() {
  try {
    const response = await api.get("/products/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSpecificCategorie(categoryName: string) {
  try {
    const response = await api.get(`/products/category/${categoryName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
