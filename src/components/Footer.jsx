import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <motion.footer
      className="text-center bg-white text-black shadow-inner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.section
        className="flex flex-col lg:flex-row justify-between items-start gap-10 p-6 lg:p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Menu */}
        <motion.div
          className="w-full lg:w-1/4 text-sm lg:text-base text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-gray-900 mb-3">Menu</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Home
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Shop
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="w-full lg:w-1/4 text-sm lg:text-base text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-gray-900 mb-3">Categories</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/About" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Casual
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Work & Office
              </Link>
            </li>
            <li>
              <Link
                to="tel:+2349160002472"
                className="text-gray-600 hover:text-teal-600"
              >
                <span className="text-teal-500">-</span> Activewear
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Evening Dresses
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="w-full lg:w-1/4 text-sm lg:text-base text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-gray-900 mb-3">Resources</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Contact Support
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> FAQ
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Live Chat
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Returns
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="w-full lg:w-1/4 text-sm lg:text-base text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-gray-900 mb-3">Social Media</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <span className="text-teal-500">-</span> Pinterest
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Copyright */}
      <motion.h3
        className="text-sm lg:text-base text-gray-500 mt-6 text-center border-t border-gray-200 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        &copy; 2025{" "}
        <span className="text-teal-700 font-bold">PureMotif Fashion</span> |
        Powered by{" "}
        <span className="text-teal-500 hover:underline">PureMotif Fashion</span>
      </motion.h3>
    </motion.footer>
  );
}
