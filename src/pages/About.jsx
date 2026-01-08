import Carousel from "../components/about/Carousel"

export const About = () => {
    return (
        <div className="px-4 py-10">
            <div>
                <Carousel/>
            </div>
            <div className="mt-5">
                <h1 className="text-primary font-subheading font-bold text-2xl">About Us</h1>
            </div>
            <div className="flex flex-col gap-4 mt-4 text-lg leading-8">
            <p>Located in the heart of Surat, Bunglow Cafe is more than just a café—it’s a refined escape from the everyday. Thoughtfully designed with elegance and comfort in mind, our space brings together exceptional coffee, fresh flavors, and an atmosphere that feels both calm and inspiring.</p>

            <p>Whether you’re meeting friends, focusing on work, enjoying meaningful conversations, or simply taking time for yourself, Bunglow Cafe adapts effortlessly to your moment. We believe great cafés don’t just serve coffee—they create experiences. Every detail, from our carefully crafted beverages to our welcoming ambience, is designed to make you feel relaxed, valued, and at home.</p>

            <p>At Bunglow Cafe, every visit is unhurried, every cup intentional, and every moment worth savoring.</p>
            </div>
        </div>
    )
}