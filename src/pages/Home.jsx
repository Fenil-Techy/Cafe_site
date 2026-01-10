import { Featured } from "../components/featured/Featured"
import { Hero } from "../components/hero/Hero"
import { Testimonial } from "../components/testimonial/Testimonial"
import { Visit } from "../components/visit/Visit"

export const Home=()=>{
    return(
        <div>
            <Hero/>
            <Featured/>
            <Testimonial/>
            <Visit/>
        </div>
    )
}