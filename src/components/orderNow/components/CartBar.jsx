import { useCart } from "@/shared/context/CartContext";

export const CartBar = ({ onClick }) => {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 left-4 right-4 bg-primary text-white rounded-xl px-4 py-3 flex justify-between items-center shadow-lg cursor-pointer"
    >
      <span>{totalItems} items • ₹{totalPrice}</span>
      <span className="font-semibold">View Cart →</span>
    </div>
  );
};
