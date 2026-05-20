import {
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="bg-[#071120] border-b border-white/5 overflow-hidden">
      <div className=".container-custom-top px-8">
        <div className="h-[42px] flex items-center gap-5">
          {/* LEFT CONTACT */}

          <div className="hidden md:flex items-center gap-5 shrink-0">
            {/* PHONE */}

            <a
              href="tel:+919876543210"
              className="
                flex
                items-center
                gap-2
                text-[12px]
                lg:text-[13px]
                font-medium
                text-gray-300
                hover:text-[#22C55E]
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              <HiOutlinePhone className="text-[#22C55E] text-[16px]" />

              +91 9876543210
            </a>

            {/* DIVIDER */}

            <span className="w-[1px] h-4 bg-white/10" />

            {/* EMAIL */}

            <a
              href="mailto:hello@evergrowdigital.com"
              className="
                flex
                items-center
                gap-2
                text-[12px]
                lg:text-[13px]
                font-medium
                text-gray-300
                hover:text-[#22C55E]
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              <HiOutlineMail className="text-[#22C55E] text-[16px]" />

              hello@evergrowdigital.com
            </a>
          </div>

          {/* MARQUEE */}

          <div className="flex-1 overflow-hidden relative">
            <div className="topbar-marquee">
              <span>
                🚀 Grow Faster with EverGrow Digital
              </span>

              <span>
                SEO • Web Development • AI Automation
              </span>

              <span>
                📈 Result-Driven Marketing Strategies
              </span>

              <span>
                🌍 Helping Brands Scale Online
              </span>

              <span>
                💡 Branding • Graphics • Social Media Growth
              </span>

              {/* DUPLICATE */}

              <span>
                🚀 Grow Faster with EverGrow Digital
              </span>

              <span>
                SEO • Web Development • AI Automation
              </span>

              <span>
                📈 Result-Driven Marketing Strategies
              </span>

              <span>
                🌍 Helping Brands Scale Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;