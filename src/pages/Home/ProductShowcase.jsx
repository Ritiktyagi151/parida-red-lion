import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    // uPVC Welding Machines
    {
      title: "uPVC Single Head Welding (SLD-300)",
      image: "https://cdn.globalso.com/cgmachina/welding-machine.jpg",
      link: "/upvc-single-head-welding-sld-300",
      category: "uPVC Welding Machine",
      type: "upvc",
    },
    {
      title: "uPVC Double Head Welding (DLD-600)",
      image: "https://cdn.globalso.com/cgmachina/welding-machine.jpg",
      link: "/upvc-double-head-welding-dld-600",
      category: "uPVC Welding Machine",
      type: "upvc",
    },
    {
      title: "uPVC Single Head V-Welding Machine (SLD-300V)",
      image: "https://cdn.globalso.com/cgmachina/welding-machine.jpg",
      link: "/upvc-single-head-v-welding-sld-300v",
      category: "uPVC Welding Machine",
      type: "upvc",
    },

    // uPVC Cutting Machines
    {
      title: "Single Head Cutting Machine 350MM (SLC-300)",
      image: "https://cdn.globalso.com/cgmachina/window-cutting-machine.jpg",
      link: "/single-head-cutting-machine-slc-300",
      category: "uPVC Cutting Machine",
      type: "upvc",
    },
    {
      title: "Double Head Semi-Automatic Cutting 450MM (ROXX-600)",
      image: "https://cdn.globalso.com/cgmachina/window-cutting-machine.jpg",
      link: "/double-head-semi-automatic-cutting-roxx-600",
      category: "uPVC Cutting Machine",
      type: "upvc",
    },
    {
      title: "Double Head Automatic Cutting 450MM (ROXX-600A)",
      image: "https://cdn.globalso.com/cgmachina/window-cutting-machine.jpg",
      link: "/double-head-automatic-cutting-roxx-600a",
      category: "uPVC Cutting Machine",
      type: "upvc",
    },
    {
      title: "V-Cutting Machine (SLV-300)",
      image: "https://cdn.globalso.com/cgmachina/window-cutting-machine.jpg",
      link: "/v-cutting-machine-slv-300",
      category: "uPVC Cutting Machine",
      type: "upvc",
    },

    // uPVC Cleaning Machines
    {
      title: "uPVC Manual Cleaning Grooving Machine (GCM-300)",
      image: "https://cdn.globalso.com/cgmachina/PRODUC1.jpg",
      link: "/upvc-manual-cleaning-grooving-gcm-300",
      category: "uPVC Cleaning Machine",
      type: "upvc",
    },
    {
      title: "CNC 3-Tool Corner Cleaning Machine (CNC-300)",
      image: "https://cdn.globalso.com/cgmachina/PRODUC1.jpg",
      link: "/cnc-3-tool-corner-cleaning-cnc-300",
      category: "uPVC Cleaning Machine",
      type: "upvc",
    },

    // uPVC Copy Router & Lock Hole Machines
    {
      title: "CNC Copy Router Lock Hole Machine (CRO-900)",
      image:
        "https://cdn.globalso.com/cgmachina/double-head-screw-fastening-machine.jpg",
      link: "/cnc-copy-router-lock-hole-cro-900",
      category: "uPVC Copy Router & Lock Hole Machine",
      type: "upvc",
    },
    {
      title: "Heavy Duty Lock Hole Copy Router Machine (CRO-600)",
      image:
        "https://cdn.globalso.com/cgmachina/double-head-screw-fastening-machine.jpg",
      link: "/heavy-duty-lock-hole-copy-router-cro-600",
      category: "uPVC Copy Router & Lock Hole Machine",
      type: "upvc",
    },

    // Aluminum Cutting Machines
    {
      title: "Single Head Cutting Machine 350MM (SLC-300AL)",
      image:
        "https://cdn.globalso.com/cgmachina/aluminum-window-and-facade-machine.jpg",
      link: "/aluminum-single-head-cutting-slc-300al",
      category: "Aluminum Cutting Machine",
      type: "aluminum",
    },
    {
      title: "Double Head Automatic Cutting 600MM (ROXX-1000)",
      image:
        "https://cdn.globalso.com/cgmachina/aluminum-window-and-facade-machine.jpg",
      link: "/aluminum-double-head-cutting-roxx-1000",
      category: "Aluminum Cutting Machine",
      type: "aluminum",
    },

    // Aluminum Mullion Machines
    {
      title: "Automatic Mullion Cutting Machine (MCA-600AL)",
      image:
        "https://cdn.globalso.com/cgmachina/3-axis-aluminum-facade-machining-center-.jpg",
      link: "/aluminum-automatic-mullion-cutting-mca-600al",
      category: "Aluminum Mullion Machine",
      type: "aluminum",
    },

    // Aluminum Punching & Crimping Machines
    {
      title: "Corner 8 Punch Machine (PUC-600)",
      image:
        "https://cdn.globalso.com/cgmachina/aluminum-profile-notching-saw.jpg",
      link: "/aluminum-corner-8-punch-puc-600",
      category: "Aluminum Punching & Crimping Machine",
      type: "aluminum",
    },
    {
      title: "Corner Crimping Machine (CCM-600)",
      image:
        "https://cdn.globalso.com/cgmachina/aluminum-profile-notching-saw.jpg",
      link: "/aluminum-corner-crimping-ccm-600",
      category: "Aluminum Punching & Crimping Machine",
      type: "aluminum",
    },
  ];

  // Filter products based on active filter
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 ml-14 text-start">
          <h2 className="text-3xl font-bold mb-2">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300 inline-flex items-center">
                OUR PRODUCTS
                <span className="mx-3 h-0.5 w-12 bg-red-600 transition-all duration-500 group-hover:w-16 group-hover:bg-purple-600"></span>
                <span className="text-gray-500 text-xl italic font-normal hover:text-red-500 transition-colors duration-300">
                  best for you
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-700 group-hover:w-full"></div>
            </div>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeFilter === "all"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveFilter("upvc")}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === "upvc"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              uPVC Window Machines
            </button>
            <button
              onClick={() => setActiveFilter("aluminum")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeFilter === "aluminum"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Aluminum Window Machines
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 mx-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              data-wow-delay={`${index * 0.1}s`}
            >
              {/* Category Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                {product.category}
              </div>

              {/* Animated border elements */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300 delay-75"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 transition-all duration-300 delay-150"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-red-500/10 group-hover:to-purple-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>

              <figure className="relative">
                <div className="relative overflow-hidden h-48">
                  <Link to={product.link}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                </div>
                <figcaption className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link
                      to={product.link}
                      className="text-gray-800 hover:text-red-600 transition-colors"
                    >
                      {product.title}
                    </Link>
                  </h3>
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
