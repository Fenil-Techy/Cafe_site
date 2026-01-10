import { useState } from "react";
import menuData from "./data/MenuData";
import {CategoryTabs} from "./components/CategoryTabs";
import {MenuItemCard} from "./components/MenuItemCard";
import { SearchBar } from "./components/SearchBar";
import {CartBar} from "./components/CartBar";
import { CartSummary } from "./components/CartSummary";

export const OrderPage=()=>{
    const categories = menuData.map((c) => c.category);

    const [active, setActive] = useState(categories[0]);
    const[search,setSearch]=useState("")
    const [showCart, setShowCart] = useState(false);
    
    const allItems=menuData.flatMap((cat)=>cat.items.map((item)=>({
        ...item,
        category:cat.category
    })
))

    const filteredItems=search?
    allItems.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
    ):menuData.find(
    (c) => c.category === active)?.items || [];

  return (
    <div className="bg-stone-50 min-h-screen">
      <CategoryTabs
        categories={categories}
        active={active}
        setActive={setActive}
      />

        <SearchBar value={search} onChange={setSearch}/>

      <div className="px-4 py-6 space-y-4">
        {filteredItems.length==0?(
        <p className="text-center text-stone-500">
            No items found 😔
          </p>
        ): 
        filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
      <CartBar onClick={()=>setShowCart(true)}/>
      {showCart && <CartSummary onClose={()=>setShowCart(false)}/>}
    </div>
  );
}
