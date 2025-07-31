import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX, FiMenu, FiChevronDown, FiGrid } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import {
  FaTools,
  FaIndustry,
  FaPhoneAlt,
  FaUserCog,
  FaBook,
  FaFire,
  FaCrown,
} from "react-icons/fa";

const RedLionNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Updated Product categories in the new structure
  const products = [
    {
      name: "uPVC Window Machine",
      icon: <FaTools className="text-red-600" />,
      link: "/products/upvc-window-machines",
      subItems: [
        {
          name: "uPVC Welding Machine",
          desc: "Includes Single Head, Double Head, and V-Welding Machines",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-welding-machines",
        },
        {
          name: "uPVC Cutting Machine",
          desc: "Precision cutting for uPVC profiles",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-cutting-machines",
        },
        {
          name: "uPVC Cleaning Machine",
          desc: "Ensures clean edges and profiles after welding",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-cleaning-machines",
        },
        {
          name: "uPVC Copy Router & Lock Hole Machine",
          desc: "Drilling and routing for locks and handles",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-copy-router-lock-hole-machines",
        },
        {
          name: "uPVC Glazing Bead Cutting Machine",
          desc: "Cuts glazing bead profiles accurately",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-glazing-bead-cutting-machines",
        },
        {
          name: "uPVC Drainage Water Slot Machine",
          desc: "Creates drainage slots in uPVC frames",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-drainage-water-slot-machines",
        },
        {
          name: "uPVC Mullion Cutting Machine",
          desc: "Precise cutting for mullion components",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-mullion-cutting-machines",
        },
        {
          name: "uPVC Interlock punching (IPL-300)",
          desc: "Efficient interlock punching for uPVC",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-interlock-punching-machines",
        },
        {
          name: "Other Special Machine",
          desc: "Custom machines for specific uPVC tasks",
          icon: <FaTools className="text-red-600" />,
          link: "/products/upvc-special-machines",
        },
      ],
    },
    {
      name: "Aluminum Window Machine",
      icon: <FaIndustry className="text-red-600" />,
      link: "/products/aluminum-window-machines",
      subItems: [
        {
          name: "Aluminum Cutting Machine",
          desc: "Precision cutting of aluminum profiles",
          icon: <FaIndustry className="text-red-600" />,
          link: "/products/aluminum-cutting-machines",
        },
        {
          name: "Aluminum Lock Hole Machine",
          desc: "Routing and drilling lock slots in aluminum",
          icon: <FaIndustry className="text-red-600" />,
          link: "/products/aluminum-lock-hole-machines",
        },
        {
          name: "Aluminum Mullion Machine",
          desc: "Designed to cut aluminum mullions accurately",
          icon: <FaIndustry className="text-red-600" />,
          link: "/products/aluminum-mullion-machines",
        },
        {
          name: "Aluminum Punching & Crimping Machine",
          desc: "Punch and crimp aluminum frames with precision",
          icon: <FaIndustry className="text-red-600" />,
          link: "/products/aluminum-punching-crimping-machines",
        },
      ],
    },
  ];

  // Services dropdown items
  const services = [
    {
      name: "Machine Customization",
      desc: "Tailored solutions",
      icon: <FaUserCog className="text-red-600" />,
      link: "/services/machine-customization",
    },
    {
      name: "Installation",
      desc: "Professional setup",
      icon: <FaTools className="text-red-600" />,
      link: "/services/installation",
    },
    {
      name: "Maintenance",
      desc: "Preventive care",
      icon: <FaIndustry className="text-red-600" />,
      link: "/services/maintenance",
    },
    {
      name: "Training",
      desc: "Operator courses",
      icon: <FaBook className="text-red-600" />,
      link: "/services/training",
    },
  ];

  // Recursive function to render nested dropdown items
  const renderDropdownItems = (items, level = 0) => {
    if (level === 1) {
      // For second level items, render in grid layout
      return (
        <div className="grid grid-cols-1 py-2 px-4 w-[350px]">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-start p-1.5 hover:bg-red-50 rounded-lg transition-all duration-300 group/item"
            >
              <span className="mt-1 mr-3 text-red-600 transform transition-transform duration-300 group-hover/item:scale-110">
                {item.icon}
              </span>
              <div>
                <div className="font-medium text-gray-700 group-hover/item:text-red-700">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    // For first level items
    return items.map((item, index) => (
      <div key={index} className="group/item relative">
        {item.link ? (
          <Link
            to={item.link}
            className="flex items-center px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300"
          >
            {item.icon && (
              <span className="mr-3 transform transition-transform duration-300 group-hover/item:scale-110">
                {item.icon}
              </span>
            )}
            <span className="flex-1 text-gray-700 font-medium">
              {item.name}
            </span>
            {item.subItems && (
              <FiChevronDown className="ml-1 transition-transform duration-300 group-hover/item:rotate-180" />
            )}
          </Link>
        ) : (
          <div className="flex items-center px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300 cursor-default">
            {item.icon && (
              <span className="mr-3 transform transition-transform duration-300 group-hover/item:scale-110">
                {item.icon}
              </span>
            )}
            <span className="flex-1 text-gray-700 font-medium">
              {item.name}
            </span>
            {item.subItems && (
              <FiChevronDown className="ml-1 transition-transform duration-300 group-hover/item:rotate-180" />
            )}
          </div>
        )}
        {item.subItems && (
          <div className="absolute left-full top-0 hidden group-hover/item:block bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn">
            {renderDropdownItems(item.subItems, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  // Recursive function to render mobile dropdown items
  const renderMobileDropdownItems = (items, level = 0, parentIndex = "") => {
    return items.map((item, index) => {
      const uniqueKey = `${parentIndex}-${index}`;
      return (
        <div key={index}>
          {item.link && !item.subItems ? (
            <Link
              to={item.link}
              className={`w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-1 ${
                level > 0 ? "pl-6" : ""
              }`}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-3 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </span>
                )}
                {item.name}
              </div>
            </Link>
          ) : (
            <button
              className={`w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-1 ${
                level > 0 ? "pl-6" : ""
              }`}
              onClick={() => toggleDropdown(`mobileCategory-${uniqueKey}`)}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-3 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </span>
                )}
                {item.name}
              </div>
              {item.subItems && (
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === `mobileCategory-${uniqueKey}`
                      ? "rotate-180"
                      : ""
                  }`}
                />
              )}
            </button>
          )}
          {item.subItems && (
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeDropdown === `mobileCategory-${uniqueKey}`
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className={`${level > 0 ? "pl-8" : "pl-6"} mt-1 space-y-2`}>
                {renderMobileDropdownItems(item.subItems, level + 1, uniqueKey)}
              </div>
            </div>
          )}
          {!item.subItems && item.desc && (
            <Link
              to={item.link}
              className={`block py-2 px-3 text-sm text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2 ${
                level > 0 ? "pl-10" : "pl-8"
              }`}
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
            </Link>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Announcement Bar with Swiper JS */}
      <div className="bg-[#FB252D] fixed w-[100vw] z-50 text-white text-sm py-2 px-8 md:flex items-center justify-between">
        {/* Social Media Icons on Left */}
        <div className="items-center hidden md:flex space-x-3 mr-4">
          <a
            href="https://facebook.com/redlionmachinery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/redlionmachines"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/redlionmachinery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/redlionmachinery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Swiper Slider for Announcements */}
        <div className="flex-1 max-w-2xl mx-4">
          <Swiper
            direction="vertical"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            className="h-6"
          >
            <SwiperSlide>
              <div className="text-center">
                <span className="inline-block">
                  Premium Industrial Machinery Since 1995 |{" "}
                </span>
                <span className="font-bold ml-1 text-yellow-300">
                  🎉 Get 10% Off on First Order
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <span className="inline-block">
                  Free Installation Support |{" "}
                </span>
                <span className="font-bold ml-1 text-yellow-300">
                  🚚 Free Shipping on Orders Over ₹50,000
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <span className="inline-block">New Product Launch | </span>
                <span className="font-bold ml-1 text-yellow-300">
                  🔥 Advanced uPVC Welding Machine Now Available
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Contact Info on Right */}
        <div className="md:flex hidden items-center space-x-4 ml-4">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-yellow-300" />
            <a href="tel:+911234567890" className="hover:underline">
              +91 12345 67890
            </a>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-yellow-300" />
            <a
              href="mailto:info@redlionmachinery.com"
              className="hover:underline"
            >
              info@redlionmachinery.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-8 z-50 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with Animation */}
            <div className="flex items-center py-2 group">
              <Link to="/" className="relative overflow-hidden rounded-lg">
                <img
                  src="/assets/logo/parida-red-new-logo.jpg"
                  alt="Red Lion Logo"
                  className="w-36 h-[60px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/"
                className="relative text-gray-700 hover:text-red-600 transition-all duration-300 font-medium group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Products Dropdown with Enhanced Animation */}
              <div className="relative group">
                <Link to="/product-category">
                  <div className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                    Products
                    <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                  <div className="absolute -left-52 mt-2 w-80 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    {renderDropdownItems(products)}
                  </div>
                </Link>
              </div>

              {/* Services Dropdown with Enhanced Animation */}
              <div className="relative group">
                <div className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                  Services
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </div>
                <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="flex items-start px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300 group/service relative overflow-hidden transform hover:translate-x-2 rounded-lg mx-2 my-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover/service:opacity-100 transition-opacity duration-300"></div>
                      <span className="mt-1 mr-3 transform transition-transform duration-300 group-hover/service:scale-110 group-hover/service:rotate-12 relative z-10">
                        {service.icon}
                      </span>
                      <div className="relative z-10">
                        <div className="text-gray-700 font-medium group-hover/service:text-red-700 transition-colors duration-300">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {service.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="relative text-gray-700 hover:text-red-600 transition-all duration-300 font-medium group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/case-studies"
                className="relative text-gray-700 hover:text-red-600 transition-all duration-300 font-medium group"
              >
                Case Studies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="relative text-gray-700 hover:text-red-600 transition-all duration-300 font-medium group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Product Catalog Button with Enhanced Animation */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-3 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-200/50 relative group"
                title="Product Catalog"
              >
                <FiGrid className="text-xl transition-transform duration-300 group-hover:rotate-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>

              {/* Search Button with Enhanced Animation */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-3 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-200/50 relative group"
              >
                <FiSearch
                  className={`text-xl transition-transform duration-300 ${
                    searchOpen ? "rotate-90" : "group-hover:rotate-90"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <FiSearch className="text-xl" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <div className="relative">
                  {mobileOpen ? (
                    <FiX className="text-xl transition-transform duration-300 rotate-90" />
                  ) : (
                    <FiMenu className="text-xl transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Enhanced Animation */}
        <div
          className={`lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300"
                onClick={() => toggleDropdown("mobileProducts")}
              >
                <span>Products</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "mobileProducts" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeDropdown === "mobileProducts"
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-2 mt-1 space-y-2">
                  {renderMobileDropdownItems(products)}
                </div>
              </div>
            </div>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300"
                onClick={() => toggleDropdown("mobileServices")}
              >
                <span>Services</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeDropdown === "mobileServices" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeDropdown === "mobileServices"
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 mt-1 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block py-2 px-3 text-gray-700 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {service.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="block py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/case-studies"
              className="block py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Search Bar with Enhanced Animation */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-2xl z-40 overflow-hidden transition-all duration-500 ${
            searchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search machinery, specs, documentation..."
                className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 focus:border-red-600 text-gray-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200 placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-red-200/50"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-300">
                <FiSearch className="text-xl" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["UPVC Cutting", "Router Specs", "Welding Guides"].map(
                (tag, index) => (
                  <Link
                    key={index}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-red-100 hover:to-red-200 hover:text-red-700 px-3 py-1 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Product Sidebar with Enhanced Animation */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white/95 backdrop-blur-lg border-l border-gray-200 z-50 shadow-2xl overflow-y-auto transform transition-all duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="text-red-600 animate-pulse">Product</span>{" "}
              Catalog
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="space-y-4">
            {products.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-200/50 group"
              >
                <Link to={category.link} className="flex items-center">
                  <div className="mr-4 p-3 bg-white rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-200/50">
                    <span className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block">
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {category.subItems.length} models available
                    </p>
                  </div>
                </Link>
                <div className="mt-3 pl-2 space-y-2">
                  {category.subItems.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.link}
                      className="block p-3 text-sm hover:bg-white/80 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:shadow-md group/item"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <div className="flex items-start">
                        <span className="mt-1 mr-3 text-red-600">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-medium text-gray-700 group-hover/item:text-red-700 transition-colors duration-300">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Overlay with Blur Effect */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-500 ${
          sidebarOpen || mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => {
          setSidebarOpen(false);
          setMobileOpen(false);
        }}
      />

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </>
  );
};

export default RedLionNavbar;