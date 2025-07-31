import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-8 text-slate-700 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-300">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-slate-200 via-transparent to-slate-200"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column */}
            <motion.div className="lg:w-1/2 " variants={imageVariants}>
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur-sm opacity-0 group-hover:opacity-40   transition-all duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Red Lion Manufacturing"
                  className="relative w-full h-[100%] object-fill rounded-2xl shadow-lg border border-slate-200 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="lg:w-1/2  text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.h2
                className="text-4xl md:text-5xl  font-light mb-6 text-slate-800"
                variants={itemVariants}
              >
                <span className="font-normal">About</span> Parida{" "}
                <span className="text-red-500 font-medium">Red</span> Lion
              </motion.h2>

              <motion.div className="mb-" variants={itemVariants}>
                <div className="w-16 h-px bg-red-400 mb-6 lg:mx-0 mx-auto"></div>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    PARIDA RED LION INDIA PVT LTD (PRL) is a leading
                    manufacturer of uPVC Aluminium window making machines,
                    dedicated to delivering innovative, high-quality solutions
                    for the uPVC & Aluminium window and door fabrication
                    industry.
                  </p>
                  <p>
                    Established in 2017 & entered uPVC & Aluminium Machine
                    Manufacturing in 2022, our company's manufacturing facility
                    is located in Greater Noida. We prioritize innovation and
                    sustainability through continuous research and development.
                  </p>
                </div>
              </motion.div>

              {/* <motion.div
                className="grid md:grid-cols-2 gap-6 mt-12"
                variants={containerVariants}
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300 group cursor-pointer"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-medium mb-3 text-slate-700 group-hover:text-slate-800 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-red-500 text-sm leading-relaxed group-hover:text-red-700 transition-colors">
                    To deliver exceptional services with integrity, powering our
                    clients' success through innovative solutions.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300 group cursor-pointer"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-medium mb-3 text-slate-700 group-hover:text-slate-800 transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-red-500 text-sm leading-relaxed group-hover:text-red-700 transition-colors">
                    To be the industry leader recognized for our bold approach
                    and unwavering commitment to excellence.
                  </p>
                </motion.div>
              </motion.div> */}

              <motion.button
                className="mt-6 px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>

          {/* Optional Values Section */}
          {/* <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            variants={containerVariants}
          >
            {[
              {
                icon: "🔧",
                title: "Excellence",
                text: "We deliver precision and quality in every solution we create.",
              },
              {
                icon: "💡",
                title: "Innovation",
                text: "Continuously evolving with cutting-edge technology and creative approaches.",
              },
              {
                icon: "🤝",
                title: "Trust",
                text: "Building lasting relationships through transparency and reliability.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <div className="text-slate-600 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-slate-700 group-hover:text-slate-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
