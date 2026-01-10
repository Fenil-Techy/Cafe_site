import { Carousel } from "./Carousel"

export const Testimonial=()=>{
    return (
        <section className=" p-4 mt-10 md:px-6 lg:px-12">
            <div>
                <p className="text-primary font-semibold sm:text-base md:text-lg ">Testimonial</p>
                <h1 className="text-2xl font-heading font-bold sm:text-2xl md:text-3xl lg:text-4xl">What People Says <br />About Us?</h1>
            </div>
            <Carousel/>
        </section>
    )
}