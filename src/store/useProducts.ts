import create, { StateCreator } from "zustand";
import { ProductProps } from "../@types/interfaces";
import AsyncStorage from "@react-native-community/async-storage";
import { persist, PersistOptions } from "zustand/middleware";
import { getAllProducts } from "../services/products";
import {
  getAllCategories,
  getProductsByCategory,
} from "../services/categories";

export type State = {
  activeCategoryIdentifier: string;
  updateCategoryListIdentifier: (categoryIdentifier: string) => void;
  getProducts: () => Promise<void>;
  getProductsByCategory: (categoryIdentifier: string) => Promise<void>;
  getCategories: () => Promise<void>;
  productsList: ProductProps[];
  newsProductsList: ProductProps[];
  categoriesList: string[];
};
type PersistProps = (
  config: StateCreator<State>,
  options: PersistOptions<State>
) => StateCreator<State>;

export const useProducts = create<State>(
  (persist as PersistProps)(
    (set, get) =>
      ({
        updateCategoryListIdentifier: (categoryIdentifier: string) => {
          useProducts.setState({
            activeCategoryIdentifier: categoryIdentifier,
          });
        },
        getProducts: async () => {
          const productsResponse = await getAllProducts();
          useProducts.setState({
            productsList: productsResponse,
            newsProductsList: productsResponse.splice(0, 5),
          });
        },
        getProductsByCategory: async (categoryIdentifier: string) => {
          const productsResponse = await getProductsByCategory(
            categoryIdentifier
          );
          useProducts.setState({
            productsList: productsResponse,
            newsProductsList: productsResponse.splice(0, 5),
          });
        },
        getCategories: async () => {
          const categoriesResponse = await getAllCategories();
          useProducts.setState({
            categoriesList: categoriesResponse,
          });
        },
      } as State),
    {
      name: "Products",
      getStorage: () => AsyncStorage,
    }
  )
);
