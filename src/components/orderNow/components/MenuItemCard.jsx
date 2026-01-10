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
                className="w-24 h-24 lg:h-30 lg:w-30 object-cover rounded-lg"
            />

            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                <h3 className="font-semibold lg:text-lg text-stone-800">
                    {item.name}
                </h3>

                <p className="text-emerald-700 font-bold lg:text-lg mt-1">
                    ₹{item.price}
                </p>
                </div>

                <div className="flex justify-between">
                    {
                        qty === 0 ? (

                            <button onClick={() => addItem(item)} className="mt-3 text-sm px-3 py-1 lg:px-5 lg:py-2 transition-transform duration-200 hover:-translate-y-2 hover:bg-primary hover:text-white border rounded-lg">
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
