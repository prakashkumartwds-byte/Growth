import MainLayout from "../layouts/MainLayout";

const GraphicsDesigning = () => {
  return (
    <MainLayout>

      <section className="py-20 md:py-28 bg-[#F8FAFC]">

        <div className="container-custom">

          <div className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Graphics Designing
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-dark mt-7">
              Creative Designs That Build Brands
            </h1>

            <p className="paragraph mt-6 text-lg">
              Professional designs for social media, branding and business identity.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              "Logo Design",
              "Social Media Design",
              "Banner Design",
              "Brand Identity",
              "UI/UX Design",
              "Marketing Creatives",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[28px] p-8 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                  🎨
                </div>

                <h3 className="text-2xl font-bold text-dark mt-6">
                  {item}
                </h3>

                <p className="paragraph mt-4">
                  Modern, clean and premium designs that attract attention and improve branding.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default GraphicsDesigning;