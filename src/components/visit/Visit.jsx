export const Visit = () => {
  return (
    <section className="my-10 p-4">
        <p className="text-primary font-semibold">Visit Us</p>
        <h1 className="text-2xl font-bold font-heading">Made for Your<br />Moments.</h1>
    <div className="relative py-4">
      <div
        style={{
            position: "relative",
            paddingBottom: "75%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          title="Bunglow Cafe Location"
          src="https://maps.google.com/maps?q=the+bungalow+cafe+surat&output=embed"
          style={{
              position: "absolute",
              top: 0,
              left: 0,
            width: "100%",
            height: "100%",
            border: 0,
        }}
        loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
        </section>
  );
};
