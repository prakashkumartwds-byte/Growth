import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiX,
  HiChevronDown,
  HiChevronRight,
} from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    link: "/web-development",

    subItems: [
      "Business Website",
      "E-Commerce Website",
      "Portfolio Website",
      "Landing Page",
      "Custom Web App",
    ],
  },

  {
    title: "Digital Marketing",
    link: "/digital-marketing",

    subItems: [
      "SEO Optimization",
      "Google Ads",
      "Meta Ads",
      "Email Marketing",
      "Social Media Marketing",
    ],
  },

  {
    title: "Graphics Designing",
    link: "/graphics-designing",

    subItems: [
      "Logo Design",
      "Banner Design",
      "Social Media Posts",
      "UI/UX Design",
      "Brand Identity",
    ],
  },

  {
    title: "Video Editing",
    link: "/video-editing",

    subItems: [
      "Reels Editing",
      "YouTube Videos",
      "Motion Graphics",
      "Advertisement Videos",
      "Promo Videos",
    ],
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState(0);

  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold font-outfit text-primary"
        >
          GrowthGarage
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* HOME */}
          <Link
            to="/"
            className={`font-medium transition hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-gray-700"
            }`}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`font-medium transition hover:text-primary ${
              location.pathname === "/about" ? "text-primary" : "text-gray-700"
            }`}
          >
            About
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary transition">
              Services
              <HiChevronDown
                className={`transition duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col xl:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 w-[95vw] max-w-[900px]"
                >
                  {/* LEFT MENU */}
                  <div className="w-full xl:w-[280px] bg-gray-50 border-b xl:border-b-0 xl:border-r border-gray-100 p-4">
                    {servicesData.map((item, index) => (
                      <button
                        key={index}
                        onMouseEnter={() => setActiveSubmenu(index)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left transition-all duration-300 ${
                          activeSubmenu === index
                            ? "bg-primary text-white shadow-lg"
                            : "hover:bg-white text-gray-700"
                        }`}
                      >
                        {item.title}

                        <HiChevronRight />
                      </button>
                    ))}
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-1 p-6">
                    <h3 className="text-3xl font-bold text-dark mb-7">
                      {servicesData[activeSubmenu].title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesData[activeSubmenu].subItems.map(
                        (subItem, index) => (
                          <Link
                            key={index}
                            to={servicesData[activeSubmenu].link}
                            className="p-5 rounded-2xl border border-gray-100 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-gray-700 font-medium"
                          >
                            {subItem}
                          </Link>
                        ),
                      )}
                    </div>

                    <Link
                      to={servicesData[activeSubmenu].link}
                      className="inline-flex mt-8 gradient-btn"
                    >
                      Explore Service
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PORTFOLIO */}
          <Link
            to="/portfolio"
            className={`font-medium transition hover:text-primary ${
              location.pathname === "/portfolio"
                ? "text-primary"
                : "text-gray-700"
            }`}
          >
            Portfolio
          </Link>

          {/* BLOG */}
          <Link
            to="/blog"
            className={`font-medium transition hover:text-primary ${
              location.pathname === "/blog" ? "text-primary" : "text-gray-700"
            }`}
          >
            Blog
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className={`font-medium transition hover:text-primary ${
              location.pathname === "/contact"
                ? "text-primary"
                : "text-gray-700"
            }`}
          >
            Contact
          </Link>

          {/* CTA */}
          {/* CTA */}

          <Link to="/contact" className="gradient-btn">
            Free Consultation
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-3xl text-dark"
        >
          {mobileMenu ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-white z-[999] shadow-2xl overflow-y-auto"
          >
            {/* TOP */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-primary">Menu</h2>

              <button onClick={() => setMobileMenu(false)} className="text-3xl">
                <HiX />
              </button>
            </div>

            {/* LINKS */}
            <div className="p-5 flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setMobileMenu(false)}
                className="font-medium text-gray-700"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenu(false)}
                className="font-medium text-gray-700"
              >
                About
              </Link>

              {/* MOBILE SERVICES */}
              <div className="border rounded-3xl p-5">
                <h3 className="font-bold text-xl mb-5">Services</h3>

                <div className="space-y-6">
                  {servicesData.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.link}
                        onClick={() => setMobileMenu(false)}
                        className="font-semibold text-primary text-lg"
                      >
                        {item.title}
                      </Link>

                      <div className="pl-3 mt-3 flex flex-col gap-3">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={item.link}
                            onClick={() => setMobileMenu(false)}
                            className="text-gray-600 text-sm hover:text-primary transition"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/portfolio"
                onClick={() => setMobileMenu(false)}
                className="font-medium text-gray-700"
              >
                Portfolio
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobileMenu(false)}
                className="font-medium text-gray-700"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="font-medium text-gray-700"
              >
                Contact
              </Link>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="gradient-btn w-full mt-4 text-center block"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
