import { Carousel } from "./Carousel"

export const Testimonial=()=>{
    return (
        <section className=" p-4">
            <div>
                <p className="text-primary font-semibold">Testimonial</p>
                <h1 className="text-2xl font-heading font-bold">What People Says <br />About Us?</h1>
            </div>
            <Carousel/>
        </section>
    )
}