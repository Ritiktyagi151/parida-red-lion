import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const productCategories = [
  {
    name: "uPVC Window Machines",
    slug: "upvc-window-machines",
    image: "https://www.veka.com/fileadmin/_processed_/9/7/csm_UPVC-Window_01_9e8c9d1c3e.jpg",
    description: "High-performance machinery for uPVC window fabrication including welding, cutting, and processing equipment",
    features: [
      "Precision welding machines",
      "Automated cutting systems",
      "Multi-functional processing",
      "Energy efficient solutions",
    ],
    machines: [
      {
        name: "uPVC Welding Machine PRO-5000",
        image: "https://www.macchinelegno.com/imgbank/RGALB/UPVC-Welding-Machine-1.jpg",
        specs: [
          "Max welding length: 3000mm",
          "Heating time: 20-30 sec",
          "Power: 5.5kW",
          "Digital temperature control",
          "Automatic pressure adjustment"
        ],
        price: "$12,500"
      },
      {
        name: "uPVC Cutting Machine MasterCut",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/11/SC/OC/ER/151800599/upvc-cutting-machine.jpg",
        specs: [
          "Cutting accuracy: ±0.1mm",
          "Cutting angle: 45°-90°",
          "Motor power: 2.2kW",
          "Laser guide system",
          "Dust extraction port"
        ],
        price: "$8,200"
      },
      {
        name: "uPVC Corner Cleaning Machine CC-200",
        image: "https://sc04.alicdn.com/kf/H1f8a3d5a8f9f4c4b8a5e1e2e3e3e3e3e.jpg",
        specs: [
          "Cleaning width: 60mm",
          "Speed: 6m/min",
          "Power: 1.1kW",
          "Adjustable cleaning depth",
          "Safety guards"
        ],
        price: "$5,800"
      },
      {
        name: "uPVC Profile Cutting Saw PCS-400",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/QT/VZ/PP/3039823/cnc-aluminum-profile-cutting-machine.jpg",
        specs: [
          "Cutting capacity: 250mm",
          "Blade diameter: 400mm",
          "Motor power: 3kW",
          "Mitre angle: 0-45°",
          "Precision guide rails"
        ],
        price: "$9,750"
      },
      {
        name: "uPVC End Milling Machine EM-300",
        image: "https://sc04.alicdn.com/kf/HTB1qXJLXErrK1RkSne1q6ArVVXag.jpg",
        specs: [
          "Milling diameter: 20-60mm",
          "Spindle speed: 2800rpm",
          "Power: 2.2kW",
          "Automatic feed",
          "Dust collection system"
        ],
        price: "$7,300"
      },
      {
        name: "uPVC Notching Machine NM-150",
        image: "https://www.machinetools.com/uploads/product_image/image/20831/large_4e9a4f5e3d9b4a7e8e0e3d9b4a7e8e0e.jpg",
        specs: [
          "Notching depth: 15mm",
          "Working pressure: 0.8MPa",
          "Power: 1.5kW",
          "Pneumatic operation",
          "Quick change tooling"
        ],
        price: "$6,500"
      },
      {
        name: "uPVC Hardware Installation Machine HI-120",
        image: "https://www.veka.com/fileadmin/_processed_/9/7/csm_UPVC-Window_01_9e8c9d1c3e.jpg",
        specs: [
          "Installation speed: 10-15 pieces/min",
          "Accuracy: ±0.2mm",
          "Power: 2kW",
          "Multi-position adjustment",
          "Ergonomic design"
        ],
        price: "$11,200"
      },
      {
        name: "uPVC Sealing System Applicator SA-800",
        image: "https://m.media-amazon.com/images/I/71Z+QyVtPIL._AC_UF1000,1000_QL80_.jpg",
        specs: [
          "Application width: 5-20mm",
          "Speed: 8m/min",
          "Power: 0.75kW",
          "Precision nozzle",
          "Adjustable thickness"
        ],
        price: "$4,800"
      }
    ]
  },
  {
    name: "Aluminum Window Machines",
    slug: "aluminum-window-machines",
    image: "https://www.alumil.com/wp-content/uploads/2021/03/aluminum-windows.jpg",
    description: "Advanced equipment for aluminum window production with superior accuracy and speed",
    features: [
      "CNC cutting technology",
      "High-speed processing",
      "Durable construction",
      "Customizable configurations",
    ],
    machines: [
      {
        name: "Aluminum Cutting Machine CNC-6500",
        image: "https://www.metalworkingworldmagazine.com/wp-content/uploads/2020/03/Aluminum-cutting-machine.jpg",
        specs: [
          "Cutting capacity: 200x200mm",
          "Speed: 60 cuts/min",
          "Power: 7.5kW",
          "CNC controlled",
          "Automatic lubrication"
        ],
        price: "$28,500"
      },
      {
        name: "Aluminum Corner Crimping Machine CC-12T",
        image: "https://sc04.alicdn.com/kf/H1f8a3d5a8f9f4c4b8a5e1e2e3e3e3e3e.jpg",
        specs: [
          "Crimping force: 12 tons",
          "Working pressure: 0.6MPa",
          "Power: 3kW",
          "Programmable settings",
          "Safety light curtains"
        ],
        price: "$15,800"
      },
      {
        name: "Aluminum CNC Machining Center MC-2500",
        image: "https://www.cncmachines.com/wp-content/uploads/2020/05/Aluminum-CNC-Machining-Center.jpg",
        specs: [
          "Working area: 2500x1300mm",
          "Spindle speed: 24000rpm",
          "Power: 15kW",
          "Automatic tool changer",
          "High precision linear guides"
        ],
        price: "$42,000"
      },
      {
        name: "Aluminum Profile Punching Machine PP-350",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/QT/VZ/PP/3039823/cnc-aluminum-profile-cutting-machine.jpg",
        specs: [
          "Punching force: 35 tons",
          "Stroke: 100mm",
          "Power: 5.5kW",
          "Multi-station tooling",
          "Programmable controller"
        ],
        price: "$18,700"
      },
      {
        name: "Aluminum End Milling Machine EM-450",
        image: "https://sc04.alicdn.com/kf/HTB1qXJLXErrK1RkSne1q6ArVVXag.jpg",
        specs: [
          "Milling diameter: 15-45mm",
          "Spindle speed: 3000rpm",
          "Power: 4kW",
          "Automatic feed",
          "Coolant system"
        ],
        price: "$14,200"
      },
      {
        name: "Aluminum Corner Assembly Machine CA-200",
        image: "https://www.machinetools.com/uploads/product_image/image/20831/large_4e9a4f5e3d9b4a7e8e0e3d9b4a7e8e0e.jpg",
        specs: [
          "Assembly speed: 8 corners/min",
          "Pressure: 0.8MPa",
          "Power: 2.2kW",
          "Pneumatic operation",
          "Adjustable fixtures"
        ],
        price: "$16,500"
      },
      {
        name: "Aluminum Drilling Machine DM-600",
        image: "https://www.veka.com/fileadmin/_processed_/9/7/csm_UPVC-Window_01_9e8c9d1c3e.jpg",
        specs: [
          "Drilling capacity: Ø3-25mm",
          "Spindle speed: 3000rpm",
          "Power: 3.7kW",
          "Multi-spindle option",
          "Precision jigs"
        ],
        price: "$12,800"
      },
      {
        name: "Aluminum Hardware Mounting System HM-1200",
        image: "https://m.media-amazon.com/images/I/71Z+QyVtPIL._AC_UF1000,1000_QL80_.jpg",
        specs: [
          "Mounting speed: 12 pieces/min",
          "Accuracy: ±0.15mm",
          "Power: 1.5kW",
          "Multi-station design",
          "Ergonomic operation"
        ],
        price: "$22,300"
      }
    ]
  },
];

const ProductsCategoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Product Categories
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Premium machinery solutions for window fabrication
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-12">
          {productCategories.map((category) => (
            <div key={category.slug} className="space-y-8">
              {/* Category Card */}
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <Link to={`/products/${category.slug}`} className="block">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {category.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {category.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="ml-2 text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/products/${category.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
                      >
                        Explore {category.name}
                        <svg
                          className="ml-2 -mr-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machines Slider */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Popular {category.name}
                </h3>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ 
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }
                  }}
                  className="pb-10"
                >
                  {category.machines.map((machine, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={machine.image}
                            alt={machine.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src = '/fallback-machine.jpg';
                            }}
                          />
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {index < 3 ? "Bestseller" : "New"}
                          </div>
                        </div>
                        <div className="p-4 flex-grow">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">
                            {machine.name}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {machine.specs.map((spec, i) => (
                              <li key={i} className="flex items-start">
                                <svg
                                  className="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="ml-2">{spec}</span>
                              </li>
                            ))}
                          </ul>
                          {machine.price && (
                            <div className="mt-3 font-bold text-red-600">
                              {machine.price}
                            </div>
                          )}
                        </div>
                        <div className="px-4 pb-4">
                          <Link
                            to={`/products/${category.slug}/${machine.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 hover:shadow-md"
                          >
                            View Details
                            <svg
                              className="ml-2 -mr-1 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our Machines?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Quality",
                  icon: (
                    <svg
                      className="w-10 h-10 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  ),
                  description:
                    "Manufactured with highest grade materials for durability and performance",
                },
                {
                  title: "Expert Support",
                  icon: (
                    <svg
                      className="w-10 h-10 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                  description:
                    "24/7 technical support and maintenance services available",
                },
                {
                  title: "Custom Solutions",
                  icon: (
                    <svg
                      className="w-10 h-10 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  ),
                  description:
                    "Tailored solutions to meet your specific production requirements",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-red-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Machinery?
            </h2>
            <p className="text-gray-600 mb-6">
              Our experts can guide you to select the perfect equipment for your
              production needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Our Team
              </Link>
              <Link
                to="/services"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategoryPage;