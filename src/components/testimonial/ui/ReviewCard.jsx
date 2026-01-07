import { FaStar } from "react-icons/fa";
export const ReviewCard = ({ user }) => {
    return (
        <div key={user.id} className=" p-4 flex flex-col gap-4 max-w-7xl h-auto rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] my-5">
            <div className="flex items-center gap-4">
                <img src={user.img} alt="Profile" className="w-10" />
                <h1 className="text-lg font-semibold">{user.name}</h1>
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
            </div>
            <div>
                <p>{user.review}</p>
            </div>
        </div>
    )
}