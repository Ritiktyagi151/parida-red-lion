import React, { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Manufacturing Director",
      company: "TechFab Industries",
      content:
        "The welding machines from Red Lion have transformed our production line. The precision and durability are unmatched in the industry.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Operations Manager",
      company: "Alumax Solutions",
      content:
        "Their cutting machines increased our efficiency by 40%. The after-sales support is exceptional - always available when we need them.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Production Lead",
      company: "Precision Engineering Co.",
      content:
        "We purchased the CNC routing system last year and it has been flawless. The training provided was comprehensive and thorough.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Quality Assurance",
      company: "Metro Fabrications",
      content:
        "The corner cleaning machine eliminated our finishing problems. It works perfectly with all our profile types and requires minimal maintenance.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Plant Supervisor",
      company: "Allied Industrial",
      content:
        "Their technical team helped us customize a solution that exactly matched our workflow. The machines have been running non-stop for 8 months with zero downtime.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Production Manager",
      company: "Global Fenestrations",
      content:
        "The automatic welding system reduced our labor costs by 30% while improving quality consistency across all our products.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const timeoutRef = useRef(null);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const length = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        nextSlide,
        5000 // Auto-advance every 5 seconds
      );
    }

    return () => {
      resetTimeout();
    };
  }, [current, isHovered, length]);

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null;
  }

  // Get current set of testimonials
  const currentTestimonials = testimonials.slice(
    current * itemsPerSlide,
    current * itemsPerSlide + itemsPerSlide
  );

  // Quote icon component
  const QuoteIcon = () => (
    <svg
      className="w-8 h-8 text-red-300"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1 0.9-2 2-2h2V8h-2zM22 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1 0.9-2 2-2h2V8h-2z" />
    </svg>
  );

  // Star icon component
  const StarIcon = ({ filled }) => (
    <svg
      className={`w-4 h-4 ${filled ? "text-red-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section
      className="py-8 sm:py-12 lg:py-8 bg-gradient-to-b bg-cover  bg-fixed from-white to-red-50"
      style={{
        backgroundImage:
          "url('https://www.fvtc.edu/Portals/0/POSImages/Programs/metal-fabrication-welding-lg.webp')",
        // other
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-gray-100">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-red-500">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Cards */}
          <div
            className={`grid gap-4 sm:gap-6 lg:gap-8 ${
              itemsPerSlide === 1
                ? "grid-cols-1"
                : itemsPerSlide === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-1 border border-red-100 group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 sm:mb-6">
                    <QuoteIcon />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-red-200 object-cover group-hover:border-red-300 transition-colors duration-300"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm sm:text-lg text-gray-800 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-red-600 text-xs sm:text-sm mb-1 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm mb-2 truncate">
                        {testimonial.company}
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < testimonial.rating} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-red-50 text-red-600 p-2 lg:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-red-200"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-red-50 text-red-600 p-2 lg:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-red-200"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-red-50 text-red-600 p-3 rounded-full shadow-lg transition-all duration-300 border border-red-200"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-red-50 text-red-600 p-3 rounded-full shadow-lg transition-all duration-300 border border-red-200"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {[...Array(length)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-red-400 w-8" : "bg-red-200 w-2"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
