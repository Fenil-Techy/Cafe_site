import { GiThreeLeaves } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
export const Featured = () => {
    return (
        <section className=" mx-auto py-15 px-4  sm:my-10 md:px-8 lg:px-12">
            <div className="mx-auto w-full">
                <h1 className="text-primary font-semibold sm:text-base md:text-lg ">Get In Touch. Treat Yourself</h1>
                <h1 className="font-bold font-heading text-2xl sm:text-2xl md:text-3xl lg:text-4xl">BEST FOOD. BEST LIFE!</h1>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:-mt-10 md:mt-10 gap-10 w-full items-start">


                <ul className="grid grid-cols-1 gap-5 font-semibold ">
                    <li className="flex items-center gap-4 text-xl md:text-2xl lg:text-[28px]">
                        <GiThreeLeaves className="text-primary text-4xl w-10 shrink-0 md:text-6xl lg:text-7xl" />
                        <span>Fresh Ingredients</span>
                    </li>
                    <li className="flex items-center gap-4 text-xl md:text-2xl lg:text-[28px]">
                        <FaShippingFast className="text-primary text-3xl w-10 shrink-0 md:text-6xl lg:text-7xl" />
                        <span>Fast Delivery</span>
                    </li>
                    <li className="flex items-center gap-4 text-xl md:text-2xl lg:text-[28px]">
                        <IoMdCheckmarkCircleOutline className="text-primary text-4xl w-10 shrink-0 md:text-6xl lg:text-7xl" />
                        <span>100% Authentic Taste</span>
                    </li>
                    <li className="flex items-center gap-4 text-xl md:text-2xl lg:text-[28px]">
                        <MdWorkspacePremium className="text-primary text-4xl w-10 shrink-0 md:text-6xl lg:text-7xl" />
                        <span>Premium Quality</span>
                    </li>
                </ul>


                <div className="relative mx-auto w-full max-w-87.5 sm:max-w-md sm:h-100 sm:mt-0 md:max-w-125 h-125 md:h-150 mt-10 md:mt-0">


                    <div className="absolute -top-13 right-0 sm:-top-15 sm:right-0 md:-top-20 md:right-10 xl:-top-30 xl:right-5  shadow-2xl bg-white p-2 z-10">
                        <img src="./featured/image3.webp" alt="" className="w-45 sm:w-40 md:w-56 xl:w-62" />
                    </div>
                    <div className="absolute top-24 md:left-0 shadow-2xl bg-white p-2 z-20">
                        <img src="./featured/image1.webp" alt="" className="w-50 sm:w-45 md:w-60 xl:w-70" />
                    </div>
                    <div className="absolute -bottom-15 right-5 sm:-bottom-25 sm:right:0 md:bottom-0 md:right-15 xl:-bottom-15 xl:right-2 shadow-2xl bg-white p-2 z-30">
                        <img src="./featured/image2.webp" alt="" className="w-45 sm:w-40 md:w-52 xl:w-60" />
                    </div>

                </div>
            </div>

        </section>
    )
}