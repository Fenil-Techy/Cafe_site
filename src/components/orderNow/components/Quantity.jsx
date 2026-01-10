import { useCart } from "../../../shared/context/CartContext";

export const Quantity=({qty,item})=>{
    const {updateQty } = useCart();
    return(
        <div className="flex items-center gap-2 border rounded-lg border-gray-400 mt-3">
      <button
        onClick={() => updateQty(item.id,qty - 1)}
        disabled={qty <= 0}
        className=" text-base pl-2 disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className=" text-center font-sm text-gray-500">
        {qty}
      </span>

      <button
        onClick={() => updateQty(item.id, qty + 1)}
        className="pr-2 text-base"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
    )
}