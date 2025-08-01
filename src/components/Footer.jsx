import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFire,
  FaTools,
  FaIndustry,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const products = [
    {
      name: "uPVC Window Machine",
      icon: <FaTools className="text-red-600" />,
      subItems: [
        {
          name: "uPVC Welding Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Cutting Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Cleaning Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Copy Router & Lock Hole Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Glazing Bead Cutting Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Drainage Water Slot Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Mullion Cutting Machine",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "uPVC Interlock punching (IPL-300)",

          icon: <FaTools className="text-red-600" />,
        },
        {
          name: "Other Special Machine",

          icon: <FaTools className="text-red-600" />,
        },
      ],
    },
    {
      name: "Aluminum Window Machine",
      icon: <FaIndustry className="text-red-600" />,
      subItems: [
        {
          name: "Aluminum Cutting Machine",
          desc: "Precision cutting of aluminum profiles",
          icon: <FaIndustry className="text-red-600" />,
        },
        {
          name: "Aluminum Lock Hole Machine",
          desc: "Routing and drilling lock slots in aluminum",
          icon: <FaIndustry className="text-red-600" />,
        },
        {
          name: "Aluminum Mullion Machine",
          desc: "Designed to cut aluminum mullions accurately",
          icon: <FaIndustry className="text-red-600" />,
        },
        {
          name: "Aluminum Punching & Crimping Machine",
          desc: "Punch and crimp aluminum frames with precision",
          icon: <FaIndustry className="text-red-600" />,
        },
      ],
    },
  ];

  return (
    <footer
      className="relative rounded-tl-[100px] rounded-tr-[100px] bg-cover   border border-purple-500 text-[#312674] pt-10 pb-10"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/white-abstract-background-theme_23-2148831659.jpg')",
        // other properties
      }}
    >
      {/* Animated background shapes */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-32 h-32 bg-[#312674]/5 rounded-full"></div>
        <div className="floating-circle-2 absolute top-40 right-20 w-24 h-24 bg-[#FC252E]/5 rounded-full"></div>
        <div className="floating-circle-3 absolute bottom-20 left-1/4 w-40 h-40 bg-[#312674]/3 rounded-full"></div>
        <div className="pulse-ring absolute top-60 right-1/3 w-16 h-16 bg-[#FC252E]/10 rounded-full"></div>
      </div> */}

      {/* Dynamic wave pattern at top */}
      {/* <div className="absolute top-0 left-0 w-full h-32">
        <svg
          className="wave-animation w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#312674" />
              <stop offset="50%" stopColor="#FC252E" />
              <stop offset="100%" stopColor="#312674" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C300,100 900,0 1200,40 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            opacity="0.1"
          />
          <path
            d="M0,60 C300,0 900,100 1200,60 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            opacity="0.05"
          />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Modified grid layout with wider products section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Description - 1 column */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="flex items-center mb-6 group">
              <img src="/assets/logo/parida-red-new-logo.jpg" alt="" />
            </div>
            <p className="text-[#312674]/80 mb-6 leading-relaxed">
              PARIDA RED LION INDIA PVT LTD (PRL) is a leading manufacturer of
              uPVC Aluminium window making machines, dedicated to delivering
              innovative, high-quality solutions for the uPVC & Aluminium window
              and door fabrication industry.
            </p>
            <div className="flex space-x-4">
              {[
                <FaFacebook />,
                <FaTwitter />,
                <FaLinkedin />,
                <FaInstagram />,
                <FaYoutube />,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-[#312674] rounded-full text-white hover:bg-[#FC252E] transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-[#FC252E]/30 social-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 1 column */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-6 relative inline-block group text-[#312674]">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FC252E] to-[#312674] transition-all duration-500 group-hover:w-full rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {["About Us", "Case Studies", "Careers", "Blog", "Newsroom"].map(
                (item, index) => (
                  <li
                    key={item}
                    className="link-hover-effect"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <a
                      href="/about"
                      className="text-[#312674]/80 hover:text-[#FC252E] flex items-center transition-all duration-300 group transform hover:translate-x-2"
                    >
                      <FiArrowUpRight className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FC252E] transform group-hover:rotate-45" />
                      <span className="relative overflow-hidden">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC252E] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products Section - Now spans 2 columns */}
          <div
            className="lg:col-span-2 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block group text-[#312674]">
              Our Products
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FC252E] to-[#312674] transition-all duration-500 group-hover:w-full rounded-full"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-[#FC252E] group-hover:animate-pulse">
                      {product.icon}
                    </div>
                    <h4 className="font-semibold text-[#312674] group-hover:text-[#FC252E] transition-colors duration-300">
                      {product.name}
                    </h4>
                  </div>
                  <ul className="space-y-3 pl-9">
                    {product.subItems.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-sm text-[#312674]/80 hover:text-[#FC252E] transition-colors duration-300 transform hover:translate-x-1"
                        style={{ animationDelay: `${0.05 * subIndex}s` }}
                      >
                        <a href="#" className="flex items-start group">
                          <span className="w-1 h-1 bg-[#FC252E] rounded-full mr-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-[#312674]/60">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us - 1 column */}
          <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-bold mb-6 relative inline-block group text-[#312674]">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FC252E] to-[#312674] transition-all duration-500 group-hover:w-full rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group contact-item-hover">
                <div className="bg-gradient-to-br from-[#FC252E]/20 to-[#312674]/20 p-3 rounded-xl mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:from-[#FC252E]/30 group-hover:to-[#312674]/30">
                  <svg
                    className="w-5 h-5 text-[#FC252E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-[#312674]/80 group-hover:text-[#312674] transition-colors duration-300">
                  123 Industrial Park, Sector 7, Mumbai, India 400079
                </span>
              </li>
              <li className="flex items-center group contact-item-hover">
                <div className="bg-gradient-to-br from-[#FC252E]/20 to-[#312674]/20 p-3 rounded-xl mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:from-[#FC252E]/30 group-hover:to-[#312674]/30">
                  <svg
                    className="w-5 h-5 text-[#FC252E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+912234567890"
                  className="text-[#312674]/80 hover:text-[#FC252E] transition-colors duration-300 transform hover:scale-105"
                >
                  +91 22 3456 7890
                </a>
              </li>
              <li className="flex items-center group contact-item-hover">
                <div className="bg-gradient-to-br from-[#FC252E]/20 to-[#312674]/20 p-3 rounded-xl mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:from-[#FC252E]/30 group-hover:to-[#312674]/30">
                  <svg
                    className="w-5 h-5 text-[#FC252E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@paridaredlion.com"
                  className="text-[#312674]/80 hover:text-[#FC252E] transition-colors duration-300 transform hover:scale-105"
                >
                  info@paridaredlion.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-[#312674]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-[#312674]/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Parida Red Lion. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-[#312674]/70 hover:text-[#FC252E] text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#312674]/70 hover:text-[#FC252E] text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#312674]/70 hover:text-[#FC252E] text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-3deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.1;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes socialBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .floating-circle {
          animation: float 6s ease-in-out infinite;
        }

        .floating-circle-2 {
          animation: floatReverse 8s ease-in-out infinite;
          animation-delay: -2s;
        }

        .floating-circle-3 {
          animation: float 10s ease-in-out infinite;
          animation-delay: -4s;
        }

        .pulse-ring {
          animation: pulse 4s ease-in-out infinite;
        }

        .wave-animation {
          animation: wave 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: slideUp 1.2s ease-out forwards;
          opacity: 0;
        }

        .social-bounce:hover {
          animation: socialBounce 0.8s ease;
        }

        .link-hover-effect {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .contact-item-hover {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .contact-item-hover:nth-child(1) {
          animation-delay: 0.1s;
        }
        .contact-item-hover:nth-child(2) {
          animation-delay: 0.2s;
        }
        .contact-item-hover:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
