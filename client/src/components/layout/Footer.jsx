import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineArrowUp,
} from "react-icons/hi";

import logo2 from "../../assets/logo-2.png";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#071326] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[120px]" />

      <div className="container-custom relative z-10 pt-20">
        {/* =========================================
            TOP GRID
        ========================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 border-b border-white/10 pb-16">
          {/* BRAND */}

          <div>
            <Link to="/">
              <img
                src={logo2}
                alt="EverGrow Digital"
                className="w-[260px] object-contain"
              />
            </Link>

            <p className="text-primary mt-4 uppercase tracking-[3px] text-sm font-semibold">
              Digital Growth Partner
            </p>

            <p className="mt-8 text-gray-400 leading-relaxed">
              EverGrow Digital helps startups, brands and businesses grow with
              powerful websites, SEO strategies, branding and digital marketing
              solutions.
            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-primary transition duration-300"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition duration-300"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Services
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li className="hover:text-primary transition duration-300 cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-primary transition duration-300 cursor-pointer">
                SEO Optimization
              </li>

              <li className="hover:text-primary transition duration-300 cursor-pointer">
                Digital Marketing
              </li>

              <li className="hover:text-primary transition duration-300 cursor-pointer">
                Graphics Designing
              </li>

              <li className="hover:text-primary transition duration-300 cursor-pointer">
                Video Editing
              </li>

              <li className="hover:text-primary transition duration-300 cursor-pointer">
                Branding Strategy
              </li>
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Contact Info
            </h3>

            <div className="space-y-7 text-gray-400">
              {/* LOCATION */}

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlineLocationMarker />
                </div>

                <p className="leading-relaxed">
                  Ghaziabad, Uttar Pradesh, India
                </p>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlinePhone />
                </div>

                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition"
                >
                  +91 9876543210
                </a>
              </div>

              {/* EMAIL */}

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlineMail />
                </div>

                <a
                  href="mailto:hello@evergrowdigital.com"
                  className="hover:text-primary transition"
                >
                  hello@evergrowdigital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CTA SECTION
        ========================================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 py-14 border-b border-white/10">
          {/* LEFT */}

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl shrink-0">
              🚀
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Let’s Grow Together
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Ready to scale your business online? Let’s build something
                powerful together.
              </p>
            </div>
          </div>

          {/* BUTTON */}

          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="gradient-btn px-10 py-4 text-lg"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* NEWSLETTER */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Subscribe Newsletter
            </h3>

            <div className="flex overflow-hidden rounded-2xl border border-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 px-5 py-4 outline-none text-white placeholder:text-gray-500"
              />

              <button className="bg-primary px-6 hover:bg-primary/90 transition">
                ➜
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-center lg:text-left">
            © 2026 EverGrow Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-gray-500 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-primary transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/cookies"
              className="hover:text-primary transition"
            >
              Cookie Policy
            </Link>
          </div>

          {/* SCROLL TOP */}

          <button
            onClick={scrollTop}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-300"
          >
            <HiOutlineArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;