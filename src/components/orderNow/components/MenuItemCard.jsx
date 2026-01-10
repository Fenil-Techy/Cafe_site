import { useCart } from "../../../shared/context/CartContext";
import { Quantity } from "./Quantity";

export const MenuItemCard = ({ item }) => {

    const { cartItems, addItem } = useCart();
    const cartItem = cartItems.find(ci => ci.id === item.id);
    const qty = cartItem?.qty || 0;


    return (
        <div className="flex gap-4 bg-white rounded-xl shadow-sm p-4">
            <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
                <h3 className="font-semibold text-stone-800">
                    {item.name}
                </h3>

                <p className="text-emerald-700 font-bold mt-1">
                    ₹{item.price}
                </p>

                <div className="flex justify-between">
                    {
                        qty === 0 ? (

                            <button onClick={() => addItem(item)} className="mt-3 text-sm px-3 py-1 border rounded-lg">
                                Add
                            </button>
                        ) :
                            <Quantity qty={qty} item={item} />
                    }
                </div>
            </div>
        </div>
    );
}
