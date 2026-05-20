import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";

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
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();

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
    } catch {
      setToast({
        show: true,
        message: "❌ Something went wrong!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  {
    /* =========================================
    SERVICES DATA
========================================= */
  }

  const services = [
    {
      tab: "Web Development",

      title: "Modern Website Development Solutions",

      link: "/web-development",

      image: "/services/web-development.png",

      desc: "We build fast, scalable, responsive and premium websites for startups, businesses and brands.",

      points: ["Business Website", "E-Commerce Website", "Portfolio Website"],
    },

    {
      tab: "SEO Optimization",

      title: "SEO Optimization",

      link: "/digital-marketing",

      image: "/services/seo.png",

      desc: "Boost your search rankings and drive organic traffic with advanced SEO strategies.",

      points: ["On-Page SEO", "Technical SEO", "Keyword Research"],
    },

    {
      tab: "Graphics Designing",

      title: "Creative Graphic Designing",

      link: "/graphics-designing",

      image: "/services/graphics.png",

      desc: "Premium branding and graphic solutions for modern businesses.",

      points: ["Social Media Design", "Brand Identity", "Creative Banners"],
    },

    {
      tab: "Video Editing",

      title: "Professional Video Editing",

      link: "/video-editing",

      image: "/services/video-editing.png",

      desc: "Modern video editing solutions for brands, creators and businesses.",

      points: ["Reels Editing", "YouTube Videos", "Commercial Videos"],
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
                {toast.type === "success" ? "Success" : "Error"}
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
      <section className="relative overflow-hidden bg-[#F8FBFF]">
        {/* =========================================
      BACKGROUND
  ========================================= */}

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* BLUE BLUR */}

        <div className="absolute top-[-180px] left-[-140px] w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[120px]" />

        {/* GREEN BLUR */}

        <div className="absolute bottom-[-180px] right-[-140px] w-[450px] h-[450px] bg-[#22C55E]/10 rounded-full blur-[120px]" />

        {/* =========================================
      CONTAINER
  ========================================= */}

        <div className="container-custom relative z-10 py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
            {/* =========================================
          LEFT CONTENT
      ========================================= */}

            <div>
              {/* BADGE */}

              <div
                className="
            inline-flex
            items-center
            gap-3

            px-5
            py-2.5

            rounded-full

            border
            border-[#DCE8FF]

            bg-white

            text-[#1D4ED8]
            text-sm
            font-semibold

            shadow-sm

            mb-7
          "
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                Digital Growth Agency
              </div>

              {/* HEADING */}

              <h1 className="heading-xl max-w-[700px]">
                Build Modern
                <br />
                Digital Experiences
                <span className="block text-[#1D4ED8]">For Your Brand</span>
              </h1>

              {/* DESCRIPTION */}

              <p className="paragraph max-w-xl mt-7">
                EverGrow Digital helps startups and businesses grow with premium
                websites, branding, SEO, social media marketing and modern
                digital solutions built for real business growth.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                {/* PRIMARY BUTTON */}

                <button
                  className="
              h-[56px]
              px-8

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Get Started
                </button>

                {/* SECONDARY BUTTON */}

                <button
                  className="
              h-[56px]
              px-8

              rounded-full

              border
              border-[#DCE8FF]

              bg-white

              text-[#071120]
              font-semibold

              hover:border-[#1D4ED8]
              hover:text-[#1D4ED8]

              transition-all
              duration-300
            "
                >
                  View Portfolio
                </button>
              </div>

              {/* STATS */}

              <div className="flex flex-wrap gap-10 mt-14">
                <div>
                  <h3 className="text-[32px] font-black text-[#1D4ED8]">
                    120+
                  </h3>

                  <p className="small-text">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-[32px] font-black text-[#22C55E]">98%</h3>

                  <p className="small-text">Client Satisfaction</p>
                </div>

                <div>
                  <h3 className="text-[32px] font-black text-[#1D4ED8]">5+</h3>

                  <p className="small-text">Years Experience</p>
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT CONTENT
      ========================================= */}

            <div className="relative flex justify-center">
              {/* MAIN CARD */}

              <div
                className="
            relative

            w-full
            max-w-[720px]

            rounded-[32px]

            border
            border-[#EAF2FF]

            bg-white

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]

            overflow-hidden
          "
              >
                {/* TOP BAR */}

                <div className="flex items-center gap-2 px-6 pt-5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* ANIMATION */}

                <div className="p-4 md:p-8">
                  <DotLottieReact
                    src="https://lottie.host/eb2b3892-af76-4259-92dc-c99edcee7248/LYHbcVObNa.lottie"
                    loop
                    autoplay
                  />
                </div>
              </div>

              {/* FLOATING CARD */}

              <div
                className="
            hidden
            lg:flex

            absolute
            -bottom-8
            -left-8

            items-center
            gap-4

            px-5
            py-4

            rounded-[22px]

            bg-white

            border
            border-[#EAF2FF]

            shadow-[0_15px_40px_rgba(15,23,42,0.08)]
          "
              >
                <div
                  className="
              w-14
              h-14

              rounded-2xl

              bg-[#EEF4FF]

              flex
              items-center
              justify-center

              text-2xl
            "
                >
                  📈
                </div>

                <div>
                  <h3 className="text-[26px] font-black text-[#071120]">
                    +245%
                  </h3>

                  <p className="small-text">Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    Brands & Agencies
========================================= */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        {/* SOFT BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* LIGHT GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* GLOW */}

        <div className="absolute top-[-120px] left-[10%] w-[280px] h-[280px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[10%] w-[280px] h-[280px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* =========================================
      TOP CONTENT
  ========================================= */}

        <div className="container-custom relative z-10 text-center mb-12 md:mb-16">
          {/* BADGE */}

          <div
            className="
        inline-flex
        items-center
        gap-2

        px-5
        py-2.5

        rounded-full

        bg-white

        border
        border-[#E4EEFF]

        text-[#1D4ED8]
        text-sm
        font-semibold

        shadow-sm
      "
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            Trusted By Brands
          </div>

          {/* HEADING */}

          <h2
            className="
        mt-6

        text-[34px]
        sm:text-[44px]
        lg:text-[56px]

        font-black

        leading-[1.05]

        tracking-[-2px]

        text-[#071120]
      "
          >
            Brands &<span className="text-[#1D4ED8]"> Agencies</span>
            <br />
            We Worked With
          </h2>

          {/* TEXT */}

          <p
            className="
        mt-5

        max-w-2xl
        mx-auto

        text-[16px]
        md:text-[18px]

        leading-[1.8]

        text-slate-600
      "
          >
            Helping startups, agencies and businesses grow with modern digital
            experiences and scalable marketing solutions.
          </p>
        </div>

        {/* =========================================
      CLIENT LOGO SLIDER
  ========================================= */}

        <div className="relative z-10 overflow-hidden">
          <div className="client-slider-track">
            {[
              "/clients/rankwrap.png",

              "/clients/dhalls.png",

              "/clients/careerbrainmap.png",

              "/clients/ikkis.png",

              "/clients/kidzee.png",

              "/clients/ajjars.png",

              "/clients/webnest.png",

              "/clients/brandscale.png",

              /* DUPLICATE */

              "/clients/rankwrap.png",

              "/clients/dhalls.png",

              "/clients/careerbrainmap.png",

              "/clients/ikkis.png",

              "/clients/kidzee.png",

              "/clients/ajjars.png",

              "/clients/webnest.png",

              "/clients/brandscale.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="
            client-logo-card

            flex-shrink-0

            flex
            items-center
            justify-center

            bg-white

            border
            border-[#EAF2FF]

            rounded-[24px]

            transition-all
            duration-300

            hover:-translate-y-1

            hover:shadow-[0_15px_40px_rgba(15,23,42,0.06)]

            hover:border-[#D7E7FF]
          "
              >
                <img
                  src={logo}
                  alt="client-logo"
                  className="
              max-w-[120px]
              md:max-w-[150px]

              max-h-[36px]
              md:max-h-[42px]

              object-contain

              opacity-80

              hover:opacity-100

              transition-all
              duration-300
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    WHY CHOOSE US
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* =========================================
          LEFT CONTENT
      ========================================= */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* TAG */}

              <div
                className="
            inline-flex
            items-center
            gap-2

            px-5
            py-2.5

            rounded-full

            bg-white

            border
            border-[#DCE8FF]

            text-[#1D4ED8]
            text-sm
            font-semibold

            shadow-sm

            mb-7
          "
              >
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Why Choose EverGrow
              </div>

              {/* HEADING */}

              <h2 className="heading-lg max-w-[650px]">
                A Digital Partner
                <br />
                Focused On
                <span className="text-[#1D4ED8]"> Real Growth</span>
              </h2>

              {/* DESCRIPTION */}

              <p className="paragraph mt-7 max-w-xl">
                EverGrow Digital helps businesses scale with premium websites,
                branding, SEO, marketing and modern digital experiences built
                for long-term business growth and visibility.
              </p>

              <p className="paragraph mt-5 max-w-xl">
                We focus on strategy, performance and clean execution to help
                brands build trust, increase conversions and grow faster online.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                {/* BUTTON */}

                <button
                  className="
              h-[56px]
              px-8

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Get Free Consultation
                </button>

                {/* BUTTON */}

                <button
                  className="
              h-[56px]
              px-8

              rounded-full

              border
              border-[#DCE8FF]

              bg-white

              text-[#071120]
              font-semibold

              hover:border-[#1D4ED8]
              hover:text-[#1D4ED8]

              transition-all
              duration-300
            "
                >
                  View Services
                </button>
              </div>
            </motion.div>

            {/* =========================================
          RIGHT CARDS
      ========================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* CARD */}

              {[
                {
                  title: "Brand Strategy",
                  image: "/services/branding.png",
                  desc: "Modern branding solutions designed to improve business identity and online visibility.",
                },

                {
                  title: "Web Development",
                  image: "/services/web-development.png",
                  desc: "High-performing responsive websites built for speed, engagement and conversions.",
                },

                {
                  title: "Digital Marketing",
                  image: "/services/digital-marketing.png",
                  desc: "SEO and marketing strategies focused on traffic, growth and measurable results.",
                },

                {
                  title: "Creative Design",
                  image: "/services/creative-design.png",
                  desc: "Clean UI/UX experiences crafted to improve user interaction and brand value.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`
      bg-white

      rounded-[28px]

      border
      border-[#EAF2FF]

      p-7
      md:p-8

      shadow-[0_15px_40px_rgba(15,23,42,0.05)]

      hover:-translate-y-1
      hover:border-[#D7E7FF]

      transition-all
      duration-300

      ${index === 1 || index === 3 ? "sm:mt-10" : ""}
    `}
                >
                  {/* IMAGE */}

                  <div
                    className="
        w-16
        h-16

        rounded-2xl

        bg-[#F4F8FF]

        border
        border-[#E4EEFF]

        flex
        items-center
        justify-center

        overflow-hidden

        mb-6
      "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
          w-8
          h-8

          object-contain
        "
                    />
                  </div>

                  {/* TITLE */}

                  <h3 className="text-[26px] font-bold text-[#071120] leading-[1.2]">
                    {item.title}
                  </h3>

                  {/* DESC */}

                  <p className="paragraph mt-5">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    SERVICES SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <div className="max-w-3xl mx-auto text-center">
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Our Services
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Smart Digital Solutions
              <span className="block text-[#1D4ED8]">Designed For Growth</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph max-w-2xl mx-auto mt-6">
              We help startups and businesses grow with premium websites, SEO
              optimization, branding, AI automation and modern digital
              experiences.
            </p>
          </div>

          {/* =========================================
        TABS
    ========================================= */}

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-14">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
                className={`
            px-5
            md:px-6

            h-[52px]

            rounded-full

            text-sm
            md:text-[15px]

            font-semibold

            transition-all
            duration-300

            ${
              activeTab === index
                ? "bg-[#1D4ED8] text-white shadow-[0_10px_30px_rgba(29,78,216,0.18)]"
                : "bg-white border border-[#E4EEFF] text-[#071120] hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
            }
          `}
              >
                {service.tab}
              </button>
            ))}
          </div>

          {/* =========================================
        CONTENT
    ========================================= */}

          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-16"
          >
            {/* =========================================
          LEFT
      ========================================= */}

            <div className="flex justify-center">
              <div
                className="
      group

      relative

      w-full
      max-w-[580px]

      h-[420px]
      md:h-[520px]

      rounded-[32px]

      border
      border-[#EAF2FF]

      bg-white

      shadow-[0_20px_60px_rgba(15,23,42,0.08)]

      overflow-hidden

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
    "
              >
                {/* TOP BAR */}

                <div className="flex items-center gap-2 px-6 pt-5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* IMAGE PLACEHOLDER */}

                <div
                  className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        p-8
      "
                >
                  {/* BACKGROUND */}

                  <div
                    className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)]

          bg-[size:40px_40px]
        "
                  />

                  {/* IMAGE */}

                  <img
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    className="
          relative
          z-10

          w-full
          h-full

          object-contain

          transition-all
          duration-700

          group-hover:scale-[1.03]
        "
                  />
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT
      ========================================= */}

            <div>
              {/* TITLE */}

              <h3 className="text-[34px] md:text-[48px] font-black leading-[1.1] text-[#071120]">
                {services[activeTab].title}
              </h3>

              {/* DESC */}

              <p className="paragraph mt-7">{services[activeTab].desc}</p>

              {/* POINTS */}

              <div className="space-y-6 mt-10">
                {services[activeTab].points.map((point, index) => (
                  <div
                    key={index}
                    className="
                  group

                  flex
                  gap-5

                  p-5

                  rounded-[24px]

                  bg-white

                  border
                  border-[#EAF2FF]

                  shadow-[0_10px_30px_rgba(15,23,42,0.04)]

                  hover:border-[#D7E7FF]
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
                  >
                    {/* ICON */}

                    <div
                      className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-[#EEF4FF]

                    border
                    border-[#DCE8FF]

                    flex
                    items-center
                    justify-center

                    flex-shrink-0

                    text-[#1D4ED8]
                    text-xl
                    font-bold

                    transition-all
                    duration-300

                    group-hover:bg-[#1D4ED8]
                    group-hover:text-white
                  "
                    >
                      ✓
                    </div>

                    {/* TEXT */}

                    <div>
                      <h4 className="text-[22px] font-bold text-[#071120]">
                        {point}
                      </h4>

                      <p className="paragraph mt-2">
                        Premium solutions designed to help your business grow
                        faster with modern strategies and technologies.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BUTTON */}

              <div className="mt-10">
                <Link
                  to={services[activeTab].link}
                  className="
              inline-flex
              items-center
              justify-center

              h-[56px]
              px-8

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
    PROCESS SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Our Process
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Simple Process
              <span className="block text-[#1D4ED8]">Powerful Results</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph mt-6 max-w-2xl mx-auto">
              We follow a streamlined workflow to create premium digital
              experiences focused on business growth, performance and long-term
              success.
            </p>
          </motion.div>

          {/* =========================================
        STEPS
    ========================================= */}

          <div className="relative mt-20">
            {/* LINE */}

            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#DCE8FF] via-[#1D4ED8] to-[#DCE8FF]" />

            {/* GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  desc: "Understanding your business goals, audience and project requirements.",
                },

                {
                  number: "02",
                  title: "Planning",
                  desc: "Creating strategy, wireframes, timelines and project roadmap.",
                },

                {
                  number: "03",
                  title: "Development",
                  desc: "Building scalable digital products using modern technologies.",
                },

                {
                  number: "04",
                  title: "Launch & Growth",
                  desc: "Launching, optimizing and scaling your business for growth.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
              group

              relative

              bg-white

              rounded-[30px]

              border
              border-[#EAF2FF]

              p-8

              shadow-[0_15px_40px_rgba(15,23,42,0.05)]

              hover:-translate-y-2
              hover:border-[#D7E7FF]

              transition-all
              duration-500
            "
                >
                  {/* NUMBER */}

                  <div
                    className="
                relative
                z-10

                w-20
                h-20

                rounded-full

                bg-[#EEF4FF]

                border
                border-[#DCE8FF]

                flex
                items-center
                justify-center

                mx-auto

                text-[28px]
                font-black

                text-[#1D4ED8]

                transition-all
                duration-500

                group-hover:bg-[#1D4ED8]
                group-hover:text-white
              "
                  >
                    {item.number}
                  </div>

                  {/* CONTENT */}

                  <div className="text-center mt-8">
                    <h3 className="text-[28px] font-bold text-[#071120] leading-[1.2]">
                      {item.title}
                    </h3>

                    <p className="paragraph mt-5">{item.desc}</p>
                  </div>

                  {/* HOVER GLOW */}

                  <div
                    className="
                absolute
                inset-0

                rounded-[30px]

                opacity-0

                bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_70%)]

                transition-all
                duration-500

                group-hover:opacity-100
              "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    LATEST BLOG SECTION
========================================= */}

      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 lg:gap-20 items-center">
            {/* =========================================
          LEFT
      ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              {/* BADGE */}

              <div
                className="
            inline-flex
            items-center
            gap-2

            px-5
            py-2.5

            rounded-full

            bg-white

            border
            border-[#DCE8FF]

            text-[#1D4ED8]
            text-sm
            font-semibold

            shadow-sm
          "
              >
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Latest Blogs
              </div>

              {/* HEADING */}

              <h2 className="heading-lg mt-7">
                Latest Insights &
                <span className="block text-[#1D4ED8]">Marketing Blogs</span>
              </h2>

              {/* TEXT */}

              <p className="paragraph mt-7 max-w-md">
                Explore SEO strategies, branding ideas, digital marketing tips
                and modern business growth insights from EverGrow Digital.
              </p>

              {/* BUTTON */}

              <div className="mt-10">
                <Link
                  to="/blog"
                  className="
              inline-flex
              items-center
              justify-center

              h-[56px]
              px-8

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Explore All Blogs
                </Link>
              </div>
            </motion.div>

            {/* =========================================
          RIGHT SLIDER
      ========================================= */}

            <div className="blog-slider-wrapper">
              <div className="blog-slider-track">
                {[...blogs, ...blogs].map((blog, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="
                group

                blog-card

                min-w-[280px]
                sm:min-w-[320px]
                md:min-w-[360px]

                bg-white

                rounded-[30px]

                border
                border-[#EAF2FF]

                overflow-hidden

                shadow-[0_15px_40px_rgba(15,23,42,0.05)]

                hover:-translate-y-2
                hover:border-[#D7E7FF]

                transition-all
                duration-500
              "
                  >
                    {/* IMAGE */}

                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="
                    w-full
                    h-[230px]

                    object-cover

                    transition-all
                    duration-700

                    group-hover:scale-105
                  "
                      />

                      {/* CATEGORY */}

                      <div className="absolute top-5 left-5">
                        <span
                          className="
                      bg-white/90
                      backdrop-blur-md

                      px-4
                      py-2

                      rounded-full

                      text-[13px]
                      font-semibold

                      text-[#1D4ED8]

                      border
                      border-white/40
                    "
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="p-7">
                      {/* TITLE */}

                      <h3
                        className="
                    text-[28px]
                    font-bold

                    text-[#071120]

                    leading-[1.2]

                    transition-all
                    duration-300

                    group-hover:text-[#1D4ED8]
                  "
                      >
                        {blog.title}
                      </h3>

                      {/* DESC */}

                      <p className="paragraph mt-5">{blog.description}</p>

                      {/* BUTTON */}

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="
                    inline-flex
                    items-center

                    mt-7

                    text-[#1D4ED8]
                    font-semibold

                    transition-all
                    duration-300

                    group-hover:translate-x-2
                  "
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* =========================================
   Start here ..........................................................................
========================================= */}

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
