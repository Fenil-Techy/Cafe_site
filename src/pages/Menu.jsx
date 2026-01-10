export const Menu=()=>{
    return(
        <div className="py-8">
            <div className="pb-5 pl-3">
                <h1 className="text-primary text-3xl font-bold">Menu</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:p-4 gap-10 place-items-center">
                <img src="/menu/menu1.webp" alt="menu1" className="w-80 h-full border-2 border-primary p-5 rounded-2xl" />
                <img src="/menu/menu2.webp" alt="menu1" className="w-80 h-full border-2 border-primary p-5 rounded-2xl" />
                <img src="/menu/menu3.webp" alt="menu1" className="w-80 h-full border-2 border-primary p-5 rounded-2xl" />
                <img src="/menu/menu4.webp" alt="menu1" className="w-80 h-full border-2 border-primary p-5 rounded-2xl" />
            </div>
        </div>
    )
}