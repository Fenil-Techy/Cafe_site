import { useCart } from "../../../shared/context/CartContext";

export const Quantity=({qty,item})=>{
    const {updateQty } = useCart();
    return(
        <div className="flex items-center gap-2 border rounded-lg lg:gap-4 border-gray-400 mt-3">
      <button
        onClick={() => updateQty(item.id,qty - 1)}
        disabled={qty <= 0}
        className=" text-base pl-2 disabled:opacity-40 lg:tex-lg"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className=" text-center font-sm lg:text-lg text-gray-500">
        {qty}
      </span>

      <button
        onClick={() => updateQty(item.id, qty + 1)}
        className="pr-2 text-base lg:text-lg"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
    )
}