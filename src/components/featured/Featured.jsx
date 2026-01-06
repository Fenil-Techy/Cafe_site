import { GiThreeLeaves } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
export const Featured = () => {
    return (
        <section className="py-15 px-4">
            <div>
                <h1 className="text-primary font-semibold">Get In Touch. Treat Yourself</h1>
                <h1 className="font-bold font-heading text-2xl">BEST FOOD. BEST LIFE!</h1>
            </div>
            <div className="mt-5 flex w-full">
                <ul className="grid grid-cols-1 gap-7 font-semibold py-4">

                    <li className="flex items-center gap-4 text-xl">
                        <GiThreeLeaves className="text-primary text-4xl w-10 shrink-0" />
                        <span>Fresh Ingredients</span>
                    </li>

                    <li className="flex items-center gap-4 text-xl">
                        <FaShippingFast className="text-primary text-3xl w-10 shrink-0" />
                        <span>Fast Delivery</span>
                    </li>

                    <li className="flex items-center gap-4 text-xl">
                        <IoMdCheckmarkCircleOutline className="text-primary text-4xl w-10 shrink-0" />
                        <span>100% Authentic Taste</span>
                    </li>

                    <li className="flex items-center gap-4 text-xl">
                        <MdWorkspacePremium className="text-primary text-4xl w-10 shrink-0" />
                        <span>Premium Quality</span>
                    </li>

                </ul>
            </div>

        </section>
    )
}