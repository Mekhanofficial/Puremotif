import fx21 from "../pictures/wall/jk1.jpg";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <>
      <motion.footer
        className="text-center p-4 bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${fx21})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Trigger only once when the section is in view
      >
        <motion.section
          className="flex flex-col lg:flex-row justify-between items-start gap-10 p-6 lg:p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Links Sections */}
          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Menu</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="text-gray-400 hover:text-teal-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Categories</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link
                  to="/About"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Casual
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Work & Office
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+2349160002472"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Activewear
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-teal-500"
                >
                  Evening Dresses
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Resources</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <a href="/" className="text-gray-400 hover:text-teal-500">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-teal-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-teal-500">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-teal-500">
                  Returns
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Social Media </h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <a
                  href=""
                  className="text-gray-400 hover:text-teal-500"
                  target="_blank" // This makes the link open in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-teal-500">
                  Twitter
                </a>
              </li>

              <li className="flex flex-col">
                <a href="" className="text-gray-400 hover:text-teal-500">
                  Instagram
                </a>
                <a href="" className="text-gray-400 hover:text-teal-500">
                  Pinterest
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.h3
          className="text-sm lg:text-base mt-6 text-center bg-zinc-900 p-3 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Copyright &copy;{" "}
          <span className="text-teal-700 font-bold">
            2025 Matchfit Fashion{" "}
          </span>
          | Powered by{" "}
          <span className="text-teal-500 hover:underline">
           Matchfit Fashion
          </span>
        </motion.h3>
      </motion.footer>
    </>
  );
}
