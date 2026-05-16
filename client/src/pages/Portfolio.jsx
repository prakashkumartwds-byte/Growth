import MainLayout from "../layouts/MainLayout";

import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineGlobe,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

const portfolioProjects = [
  {
    title: "Kidzee Hub",
    category: "Education Website",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    link: "https://kidzeehub.com/",
    icon: <HiOutlineGlobe />,
  },

  {
    title: "Ajjars",
    category: "eCommerce Store",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.ajjars.com/",
    icon: <HiOutlineCode />,
  },

  {
    title: "Career BrainMap",
    category: "Career Platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    link: "https://careerbrainmap.com/",
    icon: <HiOutlineDeviceMobile />,
  },

  {
    title: "RankWrap",
    category: "SEO Agency",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "https://rankwrap.com/",
    icon: <HiOutlineGlobe />,
  },

  {
    title: "IPL 2026",
    category: "Sports News",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    link: "https://ipl2026.com.in/",
    icon: <HiOutlineCode />,
  },

  {
    title: "DecentSquare",
    category: "Business Website",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    link: "https://decentsquare.com/",
    icon: <HiOutlineGlobe />,
  },
];

const Portfolio = () => {
  return (
    <MainLayout>
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFEFF] py-20 md:py-28">

        <div className="container-custom">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">

              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Our Portfolio
              </p>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-outfit text-dark leading-tight mt-8">
              Our Latest
              <span className="text-primary"> Projects</span>
            </h1>

            <p className="paragraph mt-7 text-lg md:text-xl max-w-3xl mx-auto">
              Explore our premium digital experiences, modern web
              solutions, AI automation systems, and high-converting
              business websites crafted for ambitious brands.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="py-16 md:py-24 bg-white">

        <div className="container-custom">

          {/* TOP */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

            <div>

              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Featured Work
              </p>

              <h2 className="heading-lg mt-4">
                Digital Experiences We Built
              </h2>

            </div>

            <p className="paragraph max-w-2xl">
              We build scalable websites, eCommerce stores, SEO
              optimized platforms, AI automations and high-performance
              applications that deliver measurable growth.
            </p>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {portfolioProjects.map((project, index) => (

              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,194,168,0.18)] transition-all duration-500 hover:-translate-y-2"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5">

                    <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>

                  </div>

                  {/* ICON */}

                  <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary text-2xl shadow-lg">

                    {project.icon}

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  <h3 className="text-3xl font-bold text-dark font-outfit group-hover:text-primary transition">
                    {project.title}
                  </h3>

                  <p className="paragraph mt-4">
                    Modern premium digital product designed for speed,
                    branding, scalability and user engagement.
                  </p>

                  {/* BUTTON */}

                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-primary font-semibold text-lg">
                      View Project
                    </span>

                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">

                      <HiOutlineExternalLink />

                    </div>

                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-[#0F172A] relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,168,0.25),transparent_40%)]" />

        <div className="container-custom relative z-10">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
              Ready To Build Your
              <span className="text-primary"> Next Project?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mt-7 leading-relaxed">
              Let’s create powerful digital experiences that grow your
              brand, boost conversions and scale your business online.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

              <button className="gradient-btn">
                Start Your Project
              </button>

              <button className="outline-btn border-white text-white hover:bg-white hover:text-dark">
                Free Consultation
              </button>

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
};

export default Portfolio;