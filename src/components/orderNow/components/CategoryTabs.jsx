export const CategoryTabs=({ categories, active, setActive })=> {
  return (
    <div className="sticky top-0 z-40 bg-white border-b">
      <div className="flex gap-3 overflow-x-auto px-4 py-3">
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
