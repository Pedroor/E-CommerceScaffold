export interface ProductProps {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export interface ProductCartProps extends ProductProps {
  totalAmount: number;
  amount: number;
}
