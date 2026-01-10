import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { Map } from "../components/visit/components/Map";
export const Contact=()=>{
    return(
        <div className="p-4 mx-auto flex flex-col gap-10">
            <div className="mt-5">
                <h1 className="text-primary font-subheading font-bold text-2xl">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center gap-4 py-10 rounded-4xl shadow-[0_0px_10px_rgba(0,0,0,0)] shadow-primary">
                <FiPhoneCall className=" text-2xl text-primary rounded-4xl"/>
                <p>+91 9727421004</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 py-10 rounded-4xl shadow-[0_0px_10px_rgba(0,0,0,0)] shadow-primary">
                <CiLocationOn className=" text-3xl text-primary rounded-4xl "/>
                <p className="px-4">Third Floor, Aagam Vivianna, C-302, opp. Florencce Apt, Vesu, Surat, Gujarat 395007, India</p>
            </div>
            </div>
            <Map/>
        </div>
    )
}