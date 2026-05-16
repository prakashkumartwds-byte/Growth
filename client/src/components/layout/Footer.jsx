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

const Footer = () => {
  return (
    <footer className="relative bg-[#071326] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[120px]" />

      <div className="container-custom relative z-10 pt-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 border-b border-white/10 pb-16">
          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-bold font-outfit">
              <span className="text-primary">
                Growth
              </span>

              Garage
            </h2>

            <p className="text-primary mt-2 uppercase tracking-[3px] text-sm">
              Digital Growth Partner
            </p>

            <p className="mt-8 text-gray-400 leading-relaxed">
              We help startups and businesses accelerate growth
              with innovative digital solutions, AI automation,
              and result-driven strategies.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
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
                <a href="/" className="hover:text-primary transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-primary transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-primary transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/portfolio" className="hover:text-primary transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="/pricing" className="hover:text-primary transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>AI Automation</li>
              <li>SEO & Analytics</li>
              <li>Cloud Solutions</li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-7 text-gray-400">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlineLocationMarker />
                </div>

                <p className="leading-relaxed">
                  Muradnagar, Ghaziabad,
                  Uttar Pradesh, India
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlinePhone />
                </div>

                <p>+91 9876543210</p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                  <HiOutlineMail />
                </div>

                <p>hello@growthgarage.com</p>

              </div>

            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 py-12 border-b border-white/10">

          {/* LEFT */}
          <div className="flex gap-5">

            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl shrink-0">
              🚀
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Let’s Grow Together
              </h3>

              <p className="text-gray-400 mt-2">
                Have a project in mind? Let’s turn your ideas
                into reality and scale your business.
              </p>
            </div>

          </div>

          {/* CENTER BUTTON */}
          <div className="flex items-center justify-center">

            <button className="gradient-btn px-10 py-4 text-lg">
              Get Free Consultation
            </button>

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
                className="w-full bg-white/5 px-5 py-4 outline-none"
              />

              <button className="bg-primary px-6">
                ➜
              </button>

            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">

          <p className="text-gray-500">
            © 2026 GrowthGarage. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-gray-500">

            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-primary transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-primary transition">
              Cookie Policy
            </a>

          </div>

          {/* SCROLL BUTTON */}
          <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-300">

            <HiOutlineArrowUp />

          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;