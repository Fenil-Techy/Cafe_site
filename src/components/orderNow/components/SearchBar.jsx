export const SearchBar=({value,onChange})=>{
    return(
        <div className="px-4 py-3 bg-white border-b sticky top-14 z-30">
            <input 
            type="text"
            placeholder="Search coffee,pizza,snacks,tonics...."
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-stone-100 outline-none"
            />
        </div>
    )
}