import { Map } from "./components/Map";

export const Visit = () => {
  return (
    <section className="my-10 md:mt-20 p-4 md:px-8 lg:px-12" id="visit">
        <p className="text-primary font-semibold md:text-lg">Visit Us</p>
        <h1 className="text-2xl font-bold font-heading sm:text-2xl md:text-3xl">Made for Your<br />Moments.</h1>
        <Map/>
        </section>
  );
};
