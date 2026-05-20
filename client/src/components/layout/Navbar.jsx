import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import logo from "../../assets/logo-1.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [mobileServices, setMobileServices] =
    useState(false);

  const location = useLocation();

  const servicesRef = useRef(null);

  /* =====================================
      CLOSE DROPDOWN ON OUTSIDE CLICK
  ===================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(
          event.target
        )
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =====================================
      NAV LINKS
  ===================================== */

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Portfolio",
      path: "/portfolio",
    },

    {
      name: "Blog",
      path: "/blog",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  /* =====================================
      SERVICES
  ===================================== */

  const services = [
    {
      name: "Web Development",
      path: "/web-development",
    },

    {
      name: "Digital Marketing",
      path: "/digital-marketing",
    },

    {
      name: "Graphics Designing",
      path: "/graphics-designing",
    },

    {
      name: "Video Editing",
      path: "/video-editing",
    },

    {
      name: "SEO Optimization",
      path: "/seo-optimization",
    },

    {
      name: "AI Automation",
      path: "/ai-automation",
    },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50

        bg-white/90
        backdrop-blur-2xl

        border-b
        border-[#EDF4FF]

        shadow-[0_4px_30px_rgba(0,0,0,0.03)]
      "
    >
      <div className="container-custom">
        <div
          className="
            h-[72px]
            sm:h-[78px]
            lg:h-[82px]

            flex
            items-center
            justify-between
          "
        >
          {/* =====================================
                LOGO
          ===================================== */}

          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="EverGrow Digital"
              className="
                w-[145px]
                sm:w-[170px]
                md:w-[190px]
                lg:w-[210px]

                object-contain
              "
            />
          </Link>

          {/* =====================================
                DESKTOP NAV
          ===================================== */}

          <nav className="hidden lg:flex items-center gap-10">
            {/* HOME + ABOUT */}

            {navLinks
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative

                    text-[15px]
                    font-medium

                    transition-all
                    duration-300

                    hover:text-[#1D4ED8]

                    ${
                      location.pathname ===
                      item.path
                        ? "text-[#1D4ED8]"
                        : "text-gray-700"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]

                    after:bg-[#1D4ED8]

                    after:transition-all
                    after:duration-300

                    ${
                      location.pathname ===
                      item.path
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

            {/* =====================================
                  SERVICES
            ===================================== */}

            <div
              className="relative"
              ref={servicesRef}
            >
              <button
                onClick={() =>
                  setServicesOpen(
                    !servicesOpen
                  )
                }
                className="
                  flex
                  items-center
                  gap-2

                  text-[15px]
                  font-medium

                  text-gray-700

                  hover:text-[#1D4ED8]

                  transition-all
                  duration-300
                "
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    servicesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}

              {servicesOpen && (
                <div
                  className="
                    absolute
                    top-[62px]
                    left-0

                    w-[300px]

                    bg-white

                    rounded-[24px]

                    border
                    border-[#EDF4FF]

                    shadow-[0_25px_60px_rgba(0,0,0,0.08)]

                    p-3
                  "
                >
                  <div className="space-y-2">
                    {services.map(
                      (service) => (
                        <Link
                          key={
                            service.name
                          }
                          to={
                            service.path
                          }
                          onClick={() =>
                            setServicesOpen(
                              false
                            )
                          }
                          className="
                            flex
                            items-center
                            justify-between

                            px-5
                            py-4

                            rounded-2xl

                            text-[15px]
                            font-medium

                            text-gray-700

                            hover:bg-[#F5F9FF]
                            hover:text-[#1D4ED8]

                            transition-all
                            duration-300
                          "
                        >
                          {service.name}

                          <span className="opacity-40">
                            ↗
                          </span>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            {navLinks
              .slice(2)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative

                    text-[15px]
                    font-medium

                    transition-all
                    duration-300

                    hover:text-[#1D4ED8]

                    ${
                      location.pathname ===
                      item.path
                        ? "text-[#1D4ED8]"
                        : "text-gray-700"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-2

                    after:h-[2px]

                    after:bg-[#1D4ED8]

                    after:transition-all
                    after:duration-300

                    ${
                      location.pathname ===
                      item.path
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {/* =====================================
                DESKTOP BUTTON
          ===================================== */}

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="
                h-[48px]
                px-7

                rounded-full

                bg-[#1D4ED8]

                text-white
                text-[14px]
                font-semibold

                flex
                items-center
                justify-center

                shadow-[0_8px_24px_rgba(29,78,216,0.18)]

                hover:bg-[#1840C4]

                transition-all
                duration-300
              "
            >
              Free Consultation
            </Link>
          </div>

          {/* =====================================
                MOBILE MENU BUTTON
          ===================================== */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              lg:hidden

              w-10
              h-10
              sm:w-11
              sm:h-11

              rounded-full

              border
              border-[#DCE8FF]

              flex
              items-center
              justify-center

              text-[#1D4ED8]

              bg-[#F8FBFF]

              hover:bg-[#EEF4FF]

              transition-all
              duration-300
            "
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================
            MOBILE MENU
      ===================================== */}

      {mobileMenu && (
        <div
          className="
            lg:hidden

            bg-white

            border-t
            border-[#EDF4FF]

            shadow-2xl
          "
        >
          <div className="container-custom py-6">
            <div className="flex flex-col gap-2">
              {/* LINKS */}

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className={`
                    px-5
                    py-4

                    rounded-2xl

                    text-[15px]
                    font-medium

                    transition-all
                    duration-300

                    ${
                      location.pathname ===
                      item.path
                        ? "bg-[#1D4ED8] text-white"
                        : "text-gray-700 hover:bg-[#F5F9FF]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE SERVICES */}

              <div className="mt-2 bg-[#F8FBFF] rounded-[24px] p-3">
                <button
                  onClick={() =>
                    setMobileServices(
                      !mobileServices
                    )
                  }
                  className="
                    w-full

                    flex
                    items-center
                    justify-between

                    px-3
                    py-3

                    text-[15px]
                    font-semibold

                    text-[#1D4ED8]
                  "
                >
                  Services

                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      mobileServices
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {mobileServices && (
                  <div className="mt-2 space-y-2">
                    {services.map(
                      (service) => (
                        <Link
                          key={
                            service.name
                          }
                          to={
                            service.path
                          }
                          onClick={() => {
                            setMobileMenu(
                              false
                            );

                            setMobileServices(
                              false
                            );
                          }}
                          className="
                            block

                            px-4
                            py-4

                            rounded-2xl

                            text-[14px]
                            font-medium

                            text-gray-700

                            hover:bg-white
                            hover:text-[#1D4ED8]

                            transition-all
                            duration-300
                          "
                        >
                          {
                            service.name
                          }
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* MOBILE BUTTON */}

              <Link
                to="/contact"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  mt-4

                  h-[50px]

                  rounded-full

                  bg-[#1D4ED8]

                  text-white
                  text-[14px]
                  font-semibold

                  flex
                  items-center
                  justify-center

                  shadow-[0_8px_24px_rgba(29,78,216,0.16)]

                  hover:bg-[#1840C4]

                  transition-all
                  duration-300
                "
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;