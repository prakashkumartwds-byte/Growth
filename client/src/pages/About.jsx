import MainLayout from "../layouts/MainLayout";
import {
  HiArrowRight,
  HiCheckCircle,
  HiLightBulb,
  HiGlobeAlt,
  HiChartBar,
} from "react-icons/hi";

const About = () => {
  return (
    <MainLayout>
      {/* =========================================
         HERO SECTION
      ========================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
        {/* BG EFFECT */}

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                  About GrowthGarage
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold font-outfit text-dark leading-tight mt-7">
                We Build Powerful Digital Experiences For Modern Brands
              </h1>

              <p className="paragraph mt-7 text-lg leading-relaxed">
                GrowthGarage is a modern digital agency helping startups,
                creators, and businesses scale online with Web Development, SEO,
                Branding, Google Ads, Shopify, and AI Automation.
              </p>

              {/* POINTS */}

              <div className="space-y-5 mt-10">
                {[
                  "Modern & Responsive Websites",
                  "ROI Driven Marketing Strategies",
                  "AI Automation & Smart Solutions",
                  "Creative Branding & UI/UX Design",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <HiCheckCircle className="text-primary text-2xl flex-shrink-0" />

                    <p className="text-dark text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="gradient-btn flex items-center gap-3">
                  Get Free Consultation
                  <HiArrowRight />
                </button>

                <button className="outline-btn">View Portfolio</button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="About GrowthGarage"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING CARD */}

              <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 w-[220px]">
                <h3 className="text-4xl font-bold text-primary">250+</h3>

                <p className="paragraph mt-2">Successful Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
   TEAM SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Our Dream Team
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-dark mt-7">
              Meet Our Visionaries
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              The brilliant minds driving innovation and excellence at
              GrowthGarage
            </p>
          </div>

          {/* =========================================
       FOUNDER CARD
    ========================================= */}

          <div className="flex justify-center mt-20">
            <div className="text-center max-w-[500px]">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full scale-110" />

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="Founder"
                  className="relative z-10 w-[190px] h-[190px] rounded-full object-cover border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-dark mt-8">
                Gaurav Mishra
              </h3>

              <p className="text-primary text-lg md:text-xl font-semibold mt-3">
                Certified Market Analyst & Client Relations
              </p>

              <p className="paragraph mt-4 text-lg">
                Digital Strategy & Website Developer
              </p>

              <p className="text-gray-500 italic mt-3 text-base md:text-lg">
                5+ years transforming businesses through technology
              </p>
            </div>
          </div>

          {/* =========================================
       TEAM MEMBERS
    ========================================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
            {[
              {
                name: "Shrish Agrawal",
                role: "AI & ML Specialist",
                desc: "Technology Architecture & Innovation",
                exp: "Expert in scalable systems and emerging technologies",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Abhishek Agrawal",
                role: "Full Stack Developer",
                desc: "UI/UX Design & Brand Strategy",
                exp: "Award-winning designer with global experience",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Udit Mishra",
                role: "Content Creator & No Code Developer",
                desc: "Full-Stack Development & DevOps",
                exp: "Building robust solutions with modern technologies",
                image:
                  "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Sujal Mishra",
                role: "Marketing Head & App Developer",
                desc: "Digital Marketing & Analytics",
                exp: "Data-driven marketing strategies that deliver results",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                {/* IMAGE */}

                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-[170px] h-[170px] rounded-full object-cover border-[5px] border-white mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}

                <h3 className="text-2xl font-bold text-dark mt-7">
                  {member.name}
                </h3>

                <p className="text-primary font-semibold text-lg mt-3 leading-relaxed">
                  {member.role}
                </p>

                <p className="paragraph mt-4 text-base leading-relaxed">
                  {member.desc}
                </p>

                <p className="text-gray-500 italic mt-4 text-sm md:text-base leading-relaxed">
                  {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         STATS SECTION
      ========================================= */}

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "250+",
                title: "Projects Completed",
              },
              {
                number: "98%",
                title: "Client Satisfaction",
              },
              {
                number: "5+",
                title: "Years Experience",
              },
              {
                number: "24/7",
                title: "Support & Service",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-[30px] p-8 text-center border border-gray-200 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary">
                  {item.number}
                </h3>

                <p className="paragraph mt-4 text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         WHY CHOOSE US
      ========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Why Choose Us
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-dark mt-7">
              We Focus On Real Business Growth
            </h2>
          </div>

          {/* CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <HiLightBulb />,
                title: "Creative Strategy",
                desc: "Innovative digital solutions tailored to your business goals.",
              },
              {
                icon: <HiGlobeAlt />,
                title: "Global Reach",
                desc: "Helping brands scale worldwide through smart marketing.",
              },
              {
                icon: <HiChartBar />,
                title: "Result Driven",
                desc: "Focused on traffic, leads, conversions and business growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-4xl">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-dark mt-8">
                  {item.title}
                </h3>

                <p className="paragraph mt-5 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         CTA SECTION
      ========================================= */}

      <section className="py-16 md:py-24 bg-dark overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/20 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
              Ready To Scale Your Business Digitally?
            </h2>

            <p className="text-white/70 text-lg md:text-xl mt-7 leading-relaxed">
              Let’s build modern websites, powerful marketing campaigns and
              scalable digital systems for your brand.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="gradient-btn flex items-center gap-3">
                Start Your Project
                <HiArrowRight />
              </button>

              <button className="outline-btn border-white text-white hover:bg-white hover:text-dark">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
