import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Award,
  Users,
  Clock,
  Star,
  Heart,
  Factory,
  Settings,
  ToolCase,
  CheckCircle,
  Globe,
  PieChart,
} from "lucide-react";

const WhyChooseUs = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Hands-On Experience",
      description:
        "Since 2017, our team has assembled, serviced, and rebuilt hundreds of uPVC fabrication machines including welding, cutting, and cleaning machines.",
      highlights: [
        "8+ years in uPVC machine manufacturing",
        "250+ machine lines installed across India",
        "Factory-certified technical team",
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Quality Machinery",
      description:
        "We supply only the best-rated uPVC and aluminium fabrication machines for consistent performance and reliability.",
      highlights: [
        "Premium components from Delta, Siemens, Schneider",
        "CE, SGS, and ISO 9001 certified",
        "Multiple QC checks before dispatch",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Exceptional Support",
      description:
        "Round-the-clock customer support ensuring minimal downtime for your operations.",
      highlights: [
        "Emergency repairs available",
        "On-site installation and training",
        "Remote diagnostics",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description:
        "Tailored machinery setups that align with your specific production goals and budget.",
      highlights: [
        "OEM/ODM ready for specialized requirements",
        "Custom fabrication lines designed",
        "Application engineering services",
      ],
    },
    {
      icon: <ToolCase className="w-6 h-6" />,
      title: "Quality Commitment",
      description:
        "We never compromise on quality, using graded casting and best quality raw materials.",
      highlights: [
        "Advanced infrastructure",
        "Talented R&D team",
        "International quality standards",
      ],
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Economic Value",
      description:
        "Cost-effective solutions without compromising quality, ensuring your ROI.",
      highlights: [
        "Competitive pricing",
        "Transparent business deals",
        "Lifetime satisfaction promise",
      ],
    },
  ];

  const keyPoints = [
    { icon: <CheckCircle className="w-4 h-4" />, text: "Quality commitment" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Authenticity" },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Customer oriented approach",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Economical Working Process",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Experience you can rely on",
    },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Talented team" },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Graded casting and best quality raw material",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "An advance infrastructure",
    },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Time bound delivery" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Customizing facility" },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Economical & Competitive Prices",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Transparent business deal",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Promise of lifetime satisfaction",
    },
    { icon: <Globe className="w-4 h-4" />, text: "Worldwide market" },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "International Quality Standards",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-violet-100 text-violet-800 rounded-full mb-4">
            Why PRL Machines
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Engineering Excellence in{" "}
            <span className="text-violet-600">Every Machine</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At PRL, we live and breathe fabrication technology. With over 8
            years of experience, we specialize in high-performance uPVC
            machinery, customized for every fabrication requirement.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-300 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-violet-200"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-50 to-violet-100 rounded-xl mb-6 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-violet-500 transition-all duration-500">
                <div className="text-violet-600 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-violet-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-5 group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
              <ul className="space-y-2.5">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-300 pointer-events-none transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Points Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-8 border border-gray-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our <span className="text-violet-600">Commitment</span> to
            Excellence
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white hover:bg-violet-50 rounded-lg p-3 transition-all duration-300 border border-gray-100 hover:border-violet-200 shadow-xs hover:shadow-sm"
              >
                <div className="text-violet-500 mr-2">{point.icon}</div>
                <span className="text-gray-700 font-medium text-sm">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-600 to-violet-400 rounded-full mb-6 shadow-lg"
          >
            <Star className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            We're More Than Just a{" "}
            <span className="text-violet-600">uPVC Machine Manufacturer</span>
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're problem solvers committed to helping you build the future of
            fenestration. Whether selecting the right machine, increasing
            output, or solving technical challenges - PRL is here to help.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-400 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Discover Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
