import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const Footer=()=>{
    return(
        <div className="bg-primary text-white pb-5 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4   gap-10 py-10 px-4 lg:gap-0">
                <div>
                    <h1 className="font-semibold text-lg pb-2 lg:text-xl">Opening Hours</h1>
                    <p className="text-sm text-gray-300">12:00 PM - 12:00 AM</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="font-semibold text-lg pb-2 text-left w-25 lg:text-xl">Contact</h1>
                    <p className="text-sm text-gray-300">+91 9727421004</p>
                </div>
                <div>
                    <h1 className="font-semibold text-lg pb-2 lg:text-xl">Address</h1>
                    <p className="text-sm text-gray-300">Third Floor, Aagam Vivianna, C-302, opp. Florencce Apt, Vesu, Surat, Gujarat 395007, India</p>
                </div>
                <div className="flex flex-col justify-center items-center lg:-mt-5">
                    <div>
                        <img src="/navbar/logo.webp" alt="logo" className="w-25 xl:w-30 h-full" />
                    </div>
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/thebungalowcafe_surat?igsh=bGpjemhzbzJ0bDlj">
                        <FaInstagram className="text-2xl text-gray-300"/>
                        </a>
                        <a href="https://wa.me/9727421004">
                        <FaWhatsapp className="text-2xl  text-gray-300" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-xs text-center text-gray-300">2026 © The Bungalow Cafe. All Rights Reserved.</p>
        </div>
    )
}