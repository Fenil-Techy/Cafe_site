import { useCart } from "@/shared/context/CartContext";
import { useEffect, useState } from "react";

export const CartSummary = ({ onClose }) => {
    const { cartItems, totalPrice, clearCart } = useCart();

    const [showNameModal, setShowNameModal] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [orderType, setOrderType] = useState("");

    const isCafeOpen = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 0 && hour < 24;
    };
    const cafeOpen = isCafeOpen()
    const orderOnWhatsApp = () => {

        const phone = "919727421004";

        let message = "*Thank You for Ordering at the Bungalow Cafe*%0A%0A";
        message += `*Name:* ${customerName}%0A%0A`;
        message += `*Order Type:* ${orderType}%0A%0A`
        message += `--------------------%0A`;

        cartItems.forEach(item => {
            message += `${item.name} × ${item.qty} — ₹${item.price * item.qty}%0A`;
        });

        message += `--------------------%0A%0A`;
        message += `*Total:* ₹${totalPrice}%0A%0A`;
        message += `Kindly use this number only for genuine food orders.%0A`;
        message += `Misuse of this service is not permitted.`;

        window.open(
            `https://wa.me/${phone}?text=${message}`,
            "_blank"
        );

    };
    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>

            <div className="fixed inset-0 bg-black/40 z-50">
                <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">

                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Cart Summary</h2>
                        <button onClick={onClose} className="text-xl">×</button>
                    </div>

                    <div className="space-y-3">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between">
                                <span>{item.name} × {item.qty}</span>
                                <span>₹{item.price * item.qty}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t mt-4 pt-3 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₹{totalPrice}</span>
                    </div>

                    <div className="flex w-full gap-2 mt-4">
                        <button
                            onClick={clearCart}
                            className="w-1/3 border border-red-400 text-xs py-3 rounded-xl text-gray-500 font-semibold"
                        >
                            Clear Cart
                        </button>

                        <button
                            onClick={() => setShowNameModal(true)}
                            disabled={!cafeOpen}
                            className={`w-2/3 py-3 rounded-xl font-semibold
                                    ${cafeOpen
                                    ? "bg-primary text-white"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {cafeOpen ? "Order via WhatsApp" : "Cafe Closed"}
                        </button>
                    </div>
                </div>
            </div>

            {showNameModal && (
                <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
                    <div className="bg-white rounded-xl p-5 w-[90%] max-w-sm">

                        <h3 className="text-lg font-semibold mb-3">
                            Enter your details
                        </h3>

                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Your name"
                            autoFocus
                            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                        />


                        <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Order Type</p>

                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={orderType === "Dine-in"}
                                        onChange={() => setOrderType("Dine-in")}
                                        className="accent-primary"
                                    />
                                    Dine-in
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={orderType === "Pickup"}
                                        onChange={() => setOrderType("Pickup")}
                                        className="accent-primary"
                                    />
                                    Pickup
                                </label>
                            </div>
                        </div>

                        {!cafeOpen && (
                            <p className="text-xs text-red-500 mb-3">
                                ☕ Cafe is currently closed. Ordering available from <b>12 AM – 12 PM</b>.
                            </p>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowNameModal(false)}
                                className="flex-1 border py-2 rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                disabled={!customerName.trim() || !orderType || !cafeOpen}
                                onClick={orderOnWhatsApp}
                                className="flex-1 bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-lg font-medium"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};
