import create, { StateCreator } from "zustand";
import { ProductProps } from "../@types/interfaces";
import AsyncStorage from "@react-native-community/async-storage";
import { persist, PersistOptions } from "zustand/middleware";
import { getAllProducts } from "../services/products";
import {
  getAllCategories,
  getProductsByCategory,
  getProductsByCategoryFirstFive,
} from "../services/categories";
import { shuffleArray } from "../utils/functions";

export type State = {
  productsList: ProductProps[];
  newsProductsList: ProductProps[];
  categoriesList: string[];
  activeCategoryIdentifier: string;
  updateCategoryListIdentifier: (categoryIdentifier: string) => void;
  getProducts: () => Promise<void>;
  getProductsByCategory: (categoryIdentifier: string) => Promise<void>;
  getNewsProductsByCategory: (categoryIdentifier: string) => Promise<void>;
  getCategories: () => Promise<void>;
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
            newsProductsList: productsResponse,
          });
        },
        getProductsByCategory: async (categoryIdentifier: string) => {
          const productsResponse = await getProductsByCategory(
            categoryIdentifier
          );

          useProducts.setState({
            productsList: shuffleArray(productsResponse),
          });
        },
        getNewsProductsByCategory: async (categoryIdentifier: string) => {
          const productsResponse = await getProductsByCategoryFirstFive(
            categoryIdentifier
          );

          useProducts.setState({
            newsProductsList: productsResponse,
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
