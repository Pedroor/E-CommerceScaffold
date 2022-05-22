import create, { StateCreator } from "zustand";
import { ProductProps } from "../@types/interfaces";
import AsyncStorage from "@react-native-community/async-storage";
import { persist, PersistOptions } from "zustand/middleware";

interface ProductCart extends ProductProps {
  totalAmount: number;
  amount: number;
}

export type State = {
  addProduct: (product: ProductProps) => void;
  removeProduct: (product: ProductProps) => void;
  cartProducts: ProductCart[];
};
type PersistProps = (
  config: StateCreator<State>,
  options: PersistOptions<State>
) => StateCreator<State>;

const useCart = create<State>(
  (persist as PersistProps)(
    (set, get) =>
      ({
        cartProducts: [],
        addProduct: (product: ProductProps) => {
          const cart = get().cartProducts;
          const existingProduct = cart?.find(
            (cartProduct) => cartProduct.id === product.id
          );

          if (!existingProduct) {
            const newProduct = {
              ...product,
              amount: 1,
              totalAmount: product.price,
            };
            useCart.setState({
              cartProducts: [...cart, newProduct],
            });
          } else {
            const newAmount = existingProduct.amount + 1;
            const newTotalAmount =
              newAmount * parseFloat(existingProduct.price);
            const newCartProduct = {
              ...existingProduct,
              amount: newAmount,
              totalAmount: newTotalAmount,
            };

            const oldState = cart?.filter(
              (products) => products.id !== existingProduct.id
            );
            useCart.setState({
              cartProducts: [...oldState, newCartProduct],
            });
          }
        },
        removeProduct: (product: ProductProps) => {
          const cart = get().cartProducts;
          const existingProduct = cart?.find(
            (cartProduct) => cartProduct.id === product.id
          );

          if (existingProduct?.amount === 1) {
            const oldState = cart?.filter(
              (products) => products.id !== existingProduct.id
            );
            useCart.setState({
              cartProducts: oldState,
            });
          } else {
            const newAmount = existingProduct?.amount - 1;
            const newTotalAmount =
              newAmount * parseFloat(existingProduct?.price);
            const newCartProduct = {
              ...product,
              amount: newAmount,
              totalAmount: newTotalAmount,
            };
            useCart.setState({
              cartProducts: [...cart, newCartProduct],
            });
          }
        },
      } as State),
    {
      name: "Cart",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useCart;
