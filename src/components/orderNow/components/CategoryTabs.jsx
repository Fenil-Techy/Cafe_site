export const CategoryTabs=({ categories, active, setActive })=> {


  return (
    <div className="sticky top-0 z-40 bg-white border-b">
      <div className="flex gap-3 overflow-x-auto px-4 py-3">
        <button
          onClick={() => setActive("All")}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${active === "All" 
              ? "bg-primary text-white" 
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
              ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-stone-100 text-stone-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
