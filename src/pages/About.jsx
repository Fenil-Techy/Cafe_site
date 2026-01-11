import Carousel from "../components/about/Carousel"

export const About = () => {
    return (
        <div className="px-4 py-10 lg:p-12">
            <div>
                <Carousel/>
            </div>
            <div className="mt-5 lg:mt-10">
                <h1 className="text-primary font-subheading font-bold text-2xl lg:text-3xl">About Us</h1>
            </div>
            <div className="flex flex-col gap-4 mt-4 text-lg leading-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa sequi doloremque tenetur. A voluptates fuga quas animi, et soluta sed vero consectetur dolorem inventore magni molestiae blanditiis, architecto repellendus, eligendi deserunt porro ipsum. Eveniet quod cumque aliquid incidunt maiores? Similique voluptates, iure quisquam ducimus a nisi rerum illo fuga, voluptate impedit sit, dolore commodi nesciunt doloribus delectus. Perspiciatis voluptatem tenetur dolore fugit a doloribus veritatis asperiores ratione? Ea impedit quisquam fugit odio ipsam, consequuntur saepe reiciendis maiores tempora animi deleniti in nemo nostrum quia, eos dolore doloribus? Temporibus, error ullam iure magnam ex dignissimos sapiente laborum quas non sunt?</p>
            </div>
        </div>
    )
}