import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { HiArrowRight, HiPlay } from "react-icons/hi";


import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiGithub,
  SiGoogleads,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { MdOutlineAutoAwesome } from "react-icons/md";

const technologiesTop = [
  {
    name: "React JS",
    icon: <SiReact />,
  },

  {
    name: "Next JS",
    icon: <SiNextdotjs />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Node JS",
    icon: <SiNodedotjs />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Python",
    icon: <SiPython />,
  },

  {
    name: "WordPress",
    icon: <SiWordpress />,
  },

  {
    name: "Shopify",
    icon: <SiShopify />,
  },

  {
    name: "WooCommerce",
    icon: <SiWoocommerce />,
  },
];

const technologiesBottom = [
  {
    name: "AI Automation",
    icon: <MdOutlineAutoAwesome />,
  },

  {
    name: "Google Ads",
    icon: <SiGoogleads />,
  },

  {
    name: "SEO",
    icon: <SiGoogleads />,
  },

  {
    name: "Social Media",
    icon: <SiFigma />,
  },

  {
    name: "Figma",
    icon: <SiFigma />,
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },

  {
    name: "Express JS",
    icon: <SiExpress />,
  },

  {
    name: "Java",
    icon: <FaJava />,
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
  },

  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

const Home = () => {
  const [toast, setToast] = useState({
  show: false,
  message: "",
  type: "success",
});
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowPopup(true);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  try {

    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    /* TOAST */

    setToast({
      show: true,
      message: "🎉 Consultation Request Sent Successfully!",
      type: "success",
    });

    /* RESET FORM */

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
    });

    /* AUTO CLOSE POPUP */

    setTimeout(() => {

      setShowPopup(false);

    }, 1500);

    /* HIDE TOAST */

    setTimeout(() => {

      setToast({
        show: false,
        message: "",
        type: "success",
      });

    }, 4000);

  } catch (error) {

    setToast({
      show: true,
      message: "❌ Something went wrong!",
      type: "error",
    });

  } finally {

    setLoading(false);

  }

};

  const services = [
    {
      tab: "SEO",
      icon: "🚀",
      title: "SEO Optimization",
      desc: "Our SEO services help businesses rank higher on Google with advanced optimization and keyword strategies.",
      points: [
        "Higher Google Rankings",
        "More Leads & Conversions",
        "Long-Term Business Growth",
      ],
    },

    {
      tab: "Web Development",
      icon: "💻",
      title: "Website Development",
      desc: "We build premium modern websites that are fast, responsive, and conversion focused.",
      points: [
        "Modern Responsive Design",
        "Fast Loading Speed",
        "SEO Friendly Structure",
      ],
    },

    {
      tab: "Google Ads",
      icon: "📈",
      title: "Google Ads Marketing",
      desc: "Generate instant leads and sales with highly optimized Google Ads campaigns.",
      points: [
        "High ROI Campaigns",
        "Targeted Audience",
        "Conversion Tracking",
      ],
    },

    {
      tab: "Social Media",
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Grow your brand and audience using engaging content and strategic marketing.",
      points: [
        "Instagram & Facebook Growth",
        "Content Strategy",
        "Audience Engagement",
      ],
    },

    {
      tab: "AI Automation",
      icon: "🤖",
      title: "AI Automation",
      desc: "Automate customer support, lead generation, and workflows using AI tools.",
      points: ["AI Chatbots", "Workflow Automation", "Smart Lead Generation"],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <MainLayout>
      {/* =========================================
    TOAST
========================================= */}

{toast.show && (

  <div className="fixed top-5 right-5 z-[99999] animate-[toast_0.4s_ease]">

    <div
      className={`
        min-w-[320px]
        max-w-[90vw]
        rounded-2xl
        px-6
        py-5
        shadow-2xl
        backdrop-blur-xl
        border
        flex
        items-start
        gap-4
        ${
          toast.type === "success"
            ? "bg-white border-green-200"
            : "bg-white border-red-200"
        }
      `}
    >

      {/* ICON */}

      <div
        className={`
          w-12 h-12 rounded-full flex items-center justify-center text-xl
          ${
            toast.type === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }
        `}
      >

        {toast.type === "success" ? "✓" : "!"}

      </div>

      {/* TEXT */}

      <div className="flex-1">

        <h4 className="text-lg font-bold text-dark">

          {toast.type === "success"
            ? "Success"
            : "Error"}

        </h4>

        <p className="text-gray-600 mt-1 text-sm leading-relaxed">

          {toast.message}

        </p>

      </div>

      {/* CLOSE */}

      <button
        onClick={() =>
          setToast({
            show: false,
            message: "",
            type: "success",
          })
        }
        className="text-gray-400 hover:text-black text-lg"
      >

        ✕

      </button>

    </div>

  </div>

)}
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC]">
        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px]" />

        <div className="container-custom relative z-10 flex items-center py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
                🚀 AI Powered Digital Growth Agency
              </div>

              {/* HEADING */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-outfit text-dark">
                Accelerate
                <span className="text-primary"> Business Growth </span>
                with Smart Digital Solutions
              </h1>

              {/* DESCRIPTION */}
              <p className="paragraph mt-8 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg">
                GrowthGarage helps startups and businesses scale with premium
                web development, AI automation, branding, SEO, and modern
                digital experiences.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
                <button className="gradient-btn w-full sm:w-auto flex items-center justify-center gap-2">
                  Get Free Consultation
                  <HiArrowRight className="text-xl" />
                </button>

                <button className="outline-btn w-full sm:w-auto flex items-center justify-center gap-2">
                  <HiPlay className="text-xl" />
                  View Portfolio
                </button>
              </div>
              {/* STATS */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-14">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary animate-pulse">
                    250+
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary animate-pulse">
                    98%
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary animate-pulse">
                    5+
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              {" "}
              {/* MAIN CARD */}
              <div className="relative w-full max-w-[550px]">
                {/* GLOW */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                {/* DASHBOARD CARD */}
                <div className="relative glass rounded-[32px] p-5 md:p-8 border border-white/20">
                  {/* TOP */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-gray-500 text-sm">Revenue Growth</p>

                      <h3 className="text-3xl md:text-4xl font-bold mt-2 text-dark">
                        +245%
                      </h3>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl shadow-lg">
                      📈
                    </div>
                  </div>

                  {/* CHART */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>SEO Growth</span>
                        <span>92%</span>
                      </div>

                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-primary rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>AI Automation</span>
                        <span>85%</span>
                      </div>

                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-accent rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Web Performance</span>
                        <span>97%</span>
                      </div>

                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[97%] h-full bg-dark rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM CARDS */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-2xl p-4 shadow-soft">
                      <h4 className="text-gray-500 text-sm">Active Clients</h4>

                      <p className="text-2xl font-bold mt-2">120+</p>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-soft">
                      <h4 className="text-gray-500 text-sm">ROI Increase</h4>

                      <p className="text-2xl font-bold mt-2 text-primary">
                        3.8x
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
   INFINITE CLIENT SLIDER
========================================= */}
      <section className="py-14 md:py-20 bg-white border-y border-gray-200 overflow-hidden">
        {/* TOP */}
        <div className="container-custom text-center mb-10 md:mb-14">
          <p className="text-primary font-semibold uppercase tracking-[3px] md:tracking-[5px] text-xs md:text-sm">
            Trusted By Brands
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark mt-3 md:mt-4 leading-tight">
            Agencies & Brands
            <br className="sm:hidden" />
            We Worked With
          </h2>
        </div>

        {/* SLIDER */}
        <div className="slider-wrapper">
          <div className="slider-track">
            {[
              {
                name: "DigiDir",
                link: "https://digidir.com",
              },

              {
                name: "Sagus Solutions",
                link: "https://sagussolutions.com",
              },

              {
                name: "TechNova",
                link: "#",
              },

              {
                name: "PixelCraft",
                link: "#",
              },

              {
                name: "Growthify",
                link: "#",
              },

              {
                name: "VisionX Media",
                link: "#",
              },

              {
                name: "WebNest",
                link: "#",
              },

              {
                name: "BrandScale",
                link: "#",
              },

              /* DUPLICATE */

              {
                name: "DigiDir",
                link: "https://digidir.com",
              },

              {
                name: "Sagus Solutions",
                link: "https://sagussolutions.com",
              },

              {
                name: "TechNova",
                link: "#",
              },

              {
                name: "PixelCraft",
                link: "#",
              },

              {
                name: "Growthify",
                link: "#",
              },

              {
                name: "VisionX Media",
                link: "#",
              },

              {
                name: "WebNest",
                link: "#",
              },

              {
                name: "BrandScale",
                link: "#",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
            flex-shrink-0

            min-w-[120px]
            sm:min-w-[150px]
            md:min-w-[190px]
            lg:min-w-[220px]

            h-[58px]
            sm:h-[70px]
            md:h-[85px]
            lg:h-[100px]

            px-4
            sm:px-5
            md:px-6
            lg:px-8

            mr-3
            sm:mr-4
            md:mr-5
            lg:mr-6

            flex
            items-center
            justify-center

            rounded-2xl
            md:rounded-3xl

            bg-white

            border-2
            border-gray-200

            shadow-sm
            md:shadow-lg

            text-[13px]
            sm:text-sm
            md:text-base
            lg:text-xl

            font-semibold
            lg:font-bold

            text-dark

            whitespace-nowrap

            transition-all
            duration-300

            hover:-translate-y-1
            md:hover:-translate-y-2

            hover:border-primary

            hover:text-primary

            hover:bg-white
          "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================
   WHY CHOOSE US - PREMIUM LAYOUT
========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Why Choose Us
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark mt-4 leading-tight">
                A Digital Agency That Helps You Grow
              </h2>

              <p className="paragraph mt-8 text-base md:text-lg leading-relaxed">
                At GrowthGarage, we specialize in helping startups and
                businesses scale with modern digital solutions. Whether you need
                a high-converting website, AI automation, or powerful marketing
                strategies, our team focuses on delivering measurable results.
              </p>

              <p className="paragraph mt-6 text-base md:text-lg leading-relaxed">
                From branding and SEO to UI/UX design and social media growth,
                we build experiences that improve visibility, engagement, and
                conversions. Our mission is simple — help your business grow
                faster.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="gradient-btn">Get Free Consultation</button>

                <button className="outline-btn">View Services</button>
              </div>
            </motion.div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>

                <h3 className="text-2xl font-bold text-dark leading-snug">
                  Corporate Branding Solutions
                </h3>

                <p className="paragraph mt-5">
                  Premium branding strategies designed to elevate your business
                  identity and online presence.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-primary hover:-translate-y-2 transition-all duration-300 sm:mt-14"
              >
                <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mb-6">
                  💻
                </div>

                <h3 className="text-2xl font-bold text-dark leading-snug">
                  Website Design & Development
                </h3>

                <p className="paragraph mt-5">
                  Modern responsive websites crafted for speed, user experience,
                  and higher conversions.
                </p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-3xl mb-6">
                  📈
                </div>

                <h3 className="text-2xl font-bold text-dark leading-snug">
                  Social Media Marketing
                </h3>

                <p className="paragraph mt-5">
                  Powerful digital marketing campaigns focused on engagement,
                  reach, and ROI growth.
                </p>
              </motion.div>

              {/* CARD 4 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-primary hover:-translate-y-2 transition-all duration-300 sm:mt-14"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-100 text-cyan-500 flex items-center justify-center text-3xl mb-6">
                  🎨
                </div>

                <h3 className="text-2xl font-bold text-dark leading-snug">
                  Creative UI/UX Designing
                </h3>

                <p className="paragraph mt-5">
                  Beautiful user experiences that improve interaction,
                  retention, and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
   SERVICES SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-200 pb-5">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-2 text-sm md:text-lg font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === index
                    ? "text-primary border-primary"
                    : "text-dark border-transparent hover:text-primary"
                }`}
              >
                {service.tab}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16"
          >
            {/* LEFT */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-[40px] bg-gradient-to-br from-primary/10 to-cyan-100 border border-primary/20 shadow-2xl flex items-center justify-center">
                <div className="text-[90px] sm:text-[120px] md:text-[170px]">
                  {services[activeTab].icon}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-dark">
                {services[activeTab].title}
              </h3>

              <p className="paragraph mt-8 text-base md:text-lg leading-relaxed">
                {services[activeTab].desc}
              </p>

              {/* POINTS */}
              <div className="space-y-8 mt-10">
                {services[activeTab].points.map((point, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-dark">
                        {point}
                      </h4>

                      <p className="paragraph mt-2">
                        Premium solutions designed to help your business grow
                        faster and smarter.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-12">
                <button className="gradient-btn">Explore Services</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
   PROCESS SECTION
========================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
              Our Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark mt-4 leading-tight">
              Simple Process, Powerful Results
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              We follow a streamlined workflow to ensure every project delivers
              maximum growth, performance, and user experience.
            </p>
          </motion.div>

          {/* STEPS */}
          <div className="relative mt-16">
            {/* LINE */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* STEP 1 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* NUMBER */}
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  01
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    Discovery
                  </h3>

                  <p className="paragraph">
                    Understanding your business goals, audience, and project
                    requirements.
                  </p>
                </div>
              </motion.div>

              {/* STEP 2 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  02
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    Planning
                  </h3>

                  <p className="paragraph">
                    Creating strategy, wireframes, timelines, and project
                    roadmap.
                  </p>
                </div>
              </motion.div>

              {/* STEP 3 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  03
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    Development
                  </h3>

                  <p className="paragraph">
                    Building scalable digital products with modern technologies.
                  </p>
                </div>
              </motion.div>

              {/* STEP 4 */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                  04
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    Launch & Growth
                  </h3>

                  <p className="paragraph">
                    Launching, optimizing, and scaling your business for
                    long-term growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
   LATEST BLOG SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
            {/* LEFT */}

            <div>
              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Latest Blogs
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark leading-tight mt-5">
                Latest Insights &
                <br />
                Marketing Blogs
              </h2>

              <p className="paragraph mt-8 text-base md:text-lg leading-relaxed">
                Explore the latest SEO strategies, AI automation, branding
                ideas, and digital marketing tips to grow your business faster.
              </p>

              <button className="gradient-btn mt-10">Explore All Blogs</button>
            </div>

            {/* RIGHT SLIDER */}

            <div className="blog-slider-wrapper">
              <div className="blog-slider-track">
                {[
                  {
                    icon: "🚀",
                    title: "Top SEO Strategies To Rank Higher",
                    desc: "Improve your rankings and increase traffic using advanced SEO techniques.",
                  },

                  {
                    icon: "📈",
                    title: "How AI Automation Helps Businesses",
                    desc: "Automate customer support and workflows using powerful AI tools.",
                  },

                  {
                    icon: "💻",
                    title: "Modern Website Design Trends",
                    desc: "Explore modern UI/UX design ideas for better engagement.",
                  },

                  {
                    icon: "📱",
                    title: "Social Media Marketing Tips",
                    desc: "Grow your audience and increase engagement with strategic content.",
                  },

                  {
                    icon: "🎯",
                    title: "Google Ads Optimization Guide",
                    desc: "Generate better ROI using optimized Google Ads campaigns.",
                  },

                  /* DUPLICATE */

                  {
                    icon: "🚀",
                    title: "Top SEO Strategies To Rank Higher",
                    desc: "Improve your rankings and increase traffic using advanced SEO techniques.",
                  },

                  {
                    icon: "📈",
                    title: "How AI Automation Helps Businesses",
                    desc: "Automate customer support and workflows using powerful AI tools.",
                  },

                  {
                    icon: "💻",
                    title: "Modern Website Design Trends",
                    desc: "Explore modern UI/UX design ideas for better engagement.",
                  },
                ].map((blog, index) => (
                  <div
                    key={index}
                    className="
                blog-card

                min-w-[280px]
                sm:min-w-[320px]
                md:min-w-[360px]
              "
                  >
                    {/* ICON */}

                    <div
                      className="
                w-16
                h-16

                rounded-full

                bg-primary/10

                flex
                items-center
                justify-center

                text-3xl

                mb-8
              "
                    >
                      {blog.icon}
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                text-2xl
                font-bold
                text-dark
                leading-snug
              "
                    >
                      {blog.title}
                    </h3>

                    {/* DESC */}

                    <p
                      className="
                paragraph
                mt-6
                leading-relaxed
                text-base
              "
                    >
                      {blog.desc}
                    </p>

                    {/* BUTTON */}

                    <button
                      className="
                mt-8

                text-primary
                font-semibold

                hover:translate-x-2

                transition-all
                duration-300
              "
                    >
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
   TECHNOLOGIES SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Technologies We Use
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark leading-tight mt-7">
              Modern Technologies We Use To Build Digital Products
            </h2>

            <p className="paragraph mt-7 text-base md:text-lg leading-relaxed">
              We use modern frontend, backend, AI, and eCommerce technologies to
              build fast, scalable, and premium digital products.
            </p>
          </div>
        </div>

        {/* =========================================
      FIRST ROW
  ========================================= */}

        <div className="tech-slider-wrapper mt-16">
          <div className="tech-slider-track">
            {[...technologiesTop, ...technologiesTop].map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>

                <h3 className="tech-name">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
      SECOND ROW
  ========================================= */}

        <div className="tech-slider-wrapper mt-6">
          <div className="tech-slider-track reverse-tech-slider">
            {[...technologiesBottom, ...technologiesBottom].map(
              (tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>

                  <h3 className="tech-name">{tech.name}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========================================
   RECENT PROJECTS STACK SLIDER
========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Our Latest Work
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-dark mt-7">
              Recent Projects
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              Showcasing our latest innovations and successful client solutions
            </p>
          </div>
        </div>

        {/* =========================================
      STACK SLIDER
  ========================================= */}

        <div className="stack-slider">
          <div className="stack-track">
            {[
              {
                title: "Kidzee Hub",
                category: "Education Website",

                image:
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",

                link: "https://kidzeehub.com/",
              },

              {
                title: "Ajjars",
                category: "eCommerce Store",

                image:
                  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

                link: "https://www.ajjars.com/",
              },

              {
                title: "Career BrainMap",
                category: "Career Platform",

                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

                link: "https://careerbrainmap.com/",
              },

              {
                title: "RankWrap",
                category: "SEO Agency",

                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

                link: "https://rankwrap.com/",
              },

              {
                title: "IPL 2026",
                category: "Sports News",

                image:
                  "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",

                link: "https://ipl2026.com.in/",
              },

              {
                title: "DecentSquare",
                category: "Business Website",

                image:
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",

                link: "https://decentsquare.com/",
              },

              /* DUPLICATE */

              {
                title: "Kidzee Hub",
                category: "Education Website",

                image:
                  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",

                link: "https://kidzeehub.com/",
              },

              {
                title: "Ajjars",
                category: "eCommerce Store",

                image:
                  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

                link: "https://www.ajjars.com/",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`
            stack-card

            ${
              index % 5 === 0
                ? "center-card"
                : index % 2 === 0
                  ? "left-card"
                  : "right-card"
            }
          `}
              >
                {/* IMAGE */}

                <div className="stack-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="stack-image"
                  />

                  <div className="stack-overlay">
                    <span className="stack-category">{project.category}</span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="stack-content">
                  <h3 className="stack-title">{project.title}</h3>

                  <p className="stack-description">
                    Premium digital experience designed for branding, growth and
                    conversions.
                  </p>

                  <span className="stack-link">View Case Study ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
   FAQ SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                FAQs
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark mt-7 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              Everything you need to know about our digital services, AI
              automation, SEO, and growth solutions.
            </p>
          </div>

          {/* CONTENT */}

          <div
            className="
      mt-16

      grid
      grid-cols-1
      lg:grid-cols-2

      gap-10
      lg:gap-16

      items-center
    "
          >
            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="
          absolute
          inset-0

          bg-primary/10

          blur-[100px]

          rounded-full
        "
              />

              <img
                src="https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/promotional_image/CLHpktmI5_QCEAE=.jpeg?height=720&quality=90&width=1280"
                alt="FAQ"
                className="
            relative

            w-full

            rounded-[30px]

            shadow-2xl

            border
            border-gray-200

            object-cover
          "
              />
            </motion.div>

            {/* RIGHT FAQS */}

            <div className="space-y-5">
              {[
                {
                  question: "Why should I choose GrowthGarage for my business?",
                  answer:
                    "We provide modern websites, AI automation, SEO, and marketing solutions focused on business growth and ROI.",
                },

                {
                  question: "Do you provide SEO services?",
                  answer:
                    "Yes, we provide complete SEO optimization including technical SEO, on-page SEO, keyword research, and ranking strategies.",
                },

                {
                  question: "Can you build eCommerce websites?",
                  answer:
                    "Absolutely. We build Shopify, WooCommerce, and custom eCommerce stores optimized for sales and conversions.",
                },

                {
                  question: "Do you provide AI automation solutions?",
                  answer:
                    "Yes, we create AI chatbots, automated workflows, CRM integrations, and business automation systems.",
                },

                {
                  question: "How long does a website project take?",
                  answer:
                    "Most websites take between 1-4 weeks depending on features, design complexity, and revisions.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="
              group

              bg-[#F8FAFC]

              border
              border-gray-200

              rounded-2xl

              overflow-hidden

              transition-all
              duration-300

              hover:border-primary
            "
                >
                  <summary
                    className="
              list-none

              cursor-pointer

              px-6
              md:px-8

              py-5

              flex
              items-center
              justify-between

              gap-5
            "
                  >
                    <h3
                      className="
                text-base
                md:text-lg

                font-semibold

                text-dark

                leading-relaxed
              "
                    >
                      {faq.question}
                    </h3>

                    <span
                      className="
                min-w-[42px]
                min-h-[42px]

                rounded-full

                bg-primary/10

                flex
                items-center
                justify-center

                text-primary

                text-2xl

                transition-all
                duration-300

                group-open:rotate-45
              "
                    >
                      +
                    </span>
                  </summary>

                  <div
                    className="
              px-6
              md:px-8

              pb-6
            "
                  >
                    <p
                      className="
                text-gray-600

                leading-relaxed

                text-sm
                md:text-base
              "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
   CONTACT SECTION
========================================= */}
      {/* =========================================
   CONTACT SECTION
========================================= */}

      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Contact Us
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-dark mt-6">
              Let’s Grow Your Business
            </h2>

            <p className="paragraph mt-5 text-base md:text-lg">
              Connect with our team for websites, SEO, ads and branding
              solutions.
            </p>
          </div>

          {/* =========================================
       SINGLE ROW GRID
    ========================================= */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">
            {/* =========================================
         NOIDA CARD
      ========================================= */}

            <div className="bg-white rounded-[28px] p-6 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                  📍
                </div>

                <span className="px-4 py-2 rounded-full border border-primary text-primary text-xs font-semibold">
                  Head Office
                </span>
              </div>

              <h3 className="text-3xl font-bold text-dark mt-6">Noida</h3>

              <p className="paragraph mt-3">Sector-62, Noida, India</p>

              <a
                href="tel:+919958938205"
                className="mt-6 h-14 rounded-2xl bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center text-xl font-bold"
              >
                +91 9958938205
              </a>
            </div>

            {/* =========================================
         MORADABAD CARD
      ========================================= */}

            <div className="bg-white rounded-[28px] p-6 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                  🏢
                </div>

                <span className="px-4 py-2 rounded-full border border-dark text-dark text-xs font-semibold">
                  Branch
                </span>
              </div>

              <h3 className="text-3xl font-bold text-dark mt-6">Moradabad</h3>

              <p className="paragraph mt-3">Moradabad, Uttar Pradesh</p>

              <a
                href="tel:+919958938205"
                className="mt-6 h-14 rounded-2xl bg-dark text-white flex items-center justify-center text-xl font-bold"
              >
                +91 9958938205
              </a>
            </div>

            {/* =========================================
         SALES ENQUIRY
      ========================================= */}

            <div className="bg-white rounded-[28px] p-6 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-bold text-dark">Sales Enquiry</h3>

              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    📧
                  </div>

                  <div>
                    <p className="font-bold text-dark text-lg">Email</p>

                    <a
                      href="mailto:demo@growthgarage.in"
                      className="text-primary font-semibold"
                    >
                      demo@growthgarage.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                    💬
                  </div>

                  <div>
                    <p className="font-bold text-dark text-lg">WhatsApp</p>

                    <a
                      href="https://wa.me/919958938205"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      +91 9958938205
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================
         QUICK FORM
      ========================================= */}

            <div className="bg-white rounded-[28px] p-6 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-bold text-dark">Quick Contact</h3>

              <form className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 rounded-2xl border border-gray-300 px-4 outline-none focus:border-primary"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-14 rounded-2xl border border-gray-300 px-4 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-2xl border border-gray-300 px-4 outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    SCROLL POPUP
========================================= */}

      {showPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 py-5 overflow-y-auto">
          {/* POPUP */}

          <div className="relative w-full max-w-4xl bg-white rounded-[22px] md:rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.25)] grid grid-cols-1 lg:grid-cols-2">
            {/* CLOSE */}

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 md:top-5 md:right-5 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center text-sm md:text-lg z-50 hover:rotate-90 transition duration-300"
            >
              ✕
            </button>

            {/* =========================================
          LEFT SIDE
      ========================================= */}

            <div className="relative bg-gradient-to-br from-primary via-[#00D4B8] to-[#00B89C] text-white p-5 sm:p-7 md:p-12 flex flex-col justify-center overflow-hidden min-h-[260px] md:min-h-full">
              {/* SHAPES */}

              <div className="absolute -top-12 -right-12 w-32 md:w-72 h-32 md:h-72 rounded-full bg-white/10" />

              <div className="absolute bottom-0 left-0 w-24 md:w-52 h-24 md:h-52 rounded-full bg-white/10" />

              {/* TAG */}

              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-md px-3 py-2 rounded-full text-[10px] sm:text-xs font-semibold w-fit">
                🚀 LIMITED OFFER
              </span>

              {/* TITLE */}

              <h2 className="text-[28px] sm:text-4xl md:text-5xl font-bold font-outfit leading-tight mt-5 md:mt-8">
                Scale Your
                <br />
                Business Faster
              </h2>

              {/* DESC */}

              <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Premium websites, SEO, AI automation and digital growth
                solutions.
              </p>

              {/* FEATURES */}

              <div className="flex flex-wrap gap-2 mt-5 md:mt-8">
                <div className="bg-white/10 border border-white/20 px-3 py-2 rounded-xl text-[11px] sm:text-sm">
                  ⚡ Fast Delivery
                </div>

                <div className="bg-white/10 border border-white/20 px-3 py-2 rounded-xl text-[11px] sm:text-sm">
                  📈 High ROI
                </div>

                <div className="bg-white/10 border border-white/20 px-3 py-2 rounded-xl text-[11px] sm:text-sm">
                  🤖 AI Powered
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT SIDE
      ========================================= */}

            <div className="p-5 sm:p-7 md:p-12">
              <h3 className="text-[28px] sm:text-3xl md:text-4xl font-bold font-outfit text-dark">
                Free Consultation
              </h3>

              <p className="paragraph mt-2 md:mt-4 text-sm md:text-base">
                Fill the form and our experts will contact you.
              </p>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-5 mt-6 md:mt-10"
              >
                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[54px] md:h-[60px] rounded-2xl border border-gray-200 px-4 md:px-6 text-sm md:text-base outline-none focus:border-primary transition"
                  required
                />

                {/* EMAIL */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[54px] md:h-[60px] rounded-2xl border border-gray-200 px-4 md:px-6 text-sm md:text-base outline-none focus:border-primary transition"
                  required
                />

                {/* PHONE */}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[54px] md:h-[60px] rounded-2xl border border-gray-200 px-4 md:px-6 text-sm md:text-base outline-none focus:border-primary transition"
                  required
                />

                {/* SERVICE */}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-[48px] sm:h-[54px] md:h-[60px] rounded-2xl border border-gray-200 px-4 md:px-6 text-sm md:text-base outline-none focus:border-primary transition"
                  required
                >
                  <option value="">Select Service</option>

                  <option>Web Development</option>

                  <option>SEO Optimization</option>

                  <option>Digital Marketing</option>

                  <option>AI Automation</option>

                  <option>Branding</option>
                </select>

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-btn w-full py-3 sm:py-4 text-sm md:text-lg rounded-2xl"
                >
                  {loading ? "Sending..." : "Submit Enquiry →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
