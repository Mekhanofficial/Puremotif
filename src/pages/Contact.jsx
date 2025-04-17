import FooterPage from "../components/Footer";
import HeaderPage from "../components/Header";
import contactpic from "../pictures/contactpix.jpg";
import fx22 from "../pictures/fx22.jpg";
import blogpx from "../pictures/blogpx.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    // Handle the scroll event to toggle the "Scroll to Top" button visibility
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <>
      <section>
        <HeaderPage />

        <div
          className="relative -mt-24 top-1 flex items-center justify-center text-center"
          style={{ height: "100vh" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-zinc-950 opacity-80"
            style={{ zIndex: "-1" }}
          ></div>

          <img
            style={{
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-2",
              objectFit: "cover",
            }}
            src={blogpx}
            alt="Background image showcasing a restaurant or food ambiance"
          />

          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-5xl text-white">Contact Us</h1>
            <h3 className="text-orange-700 font-semibold text-xl mt-2">
              <Link to="/">HOME-</Link>CONTACT US
            </h3>
          </motion.div>
        </div>

        {/* Contact Information Section */}
        <div className="relative p-8 bg-zinc-950 text-white">
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Contact Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold">CONTACT US</h1>
              <h3 className="text-xl font-semibold mt-2">
                Contact Information
              </h3>
              <p className="mt-4">
                Here is our contact information, including office address, phone
                number, and web address. You can visit our office during office
                hours or call us anytime at our number.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-orange-700 font-semibold">
                    Visit our Restaurant
                  </h4>
                  <a
                    href="https://www.google.com/maps?q=2+Aro+Ologolo+Rd,+Lekki+Peninsula+II,+Lagos+106104,+Nigeria"
                    className="text-gray-200 hover:text-orange-500"
                    target="_blank" // This makes the link open in a new tab
                    rel="noopener noreferrer" // Security best practice when using target="_blank"
                  >
                    2 Aro Ologolo Rd, Lekki Peninsula II,<br /> Lagos 106104, Lagos,
                    Nigeria
                  </a>
                </div>
                <div>
                  <h4 className="text-orange-700 font-semibold">Call us</h4>
                  <a
                    href="tel:+2349160002471"
                    className="text-gray-200 hover:text-orange-500"
                  >
                    +2349160002471
                  </a>
                  <br />
                  <a
                    href="tel:+2349160002472"
                    className="text-gray-200 hover:text-orange-500"
                  >
                    +2349160002472
                  </a>
                </div>

                <div>
                  <h4 className="text-orange-700 font-semibold">Email</h4>
                  <a
                    href="mailto:Themealsgraffiti@gmail.com"
                    className="text-gray-200 hover:text-orange-500"
                  >
                    Themealsgraffiti@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-96 object-cover rounded-md"
                src={contactpic}
                alt="Contact background"
              />
            </div>
          </div>
        </div>

        <div className="py-12 px-6 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center">
              Send us a Message
            </h1>
            <h3 className="text-xl font-semibold text-center text-orange-700 my-4">
              Contact Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email on the same line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-900 border border-gray-600 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-900 border border-gray-600 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject on the same line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-900 border border-gray-600 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-900 border border-gray-600 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 mt-2 bg-gray-900 border border-gray-600 rounded-md"
                  required
                ></textarea>
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="newsletter" className="text-lg">
                  Send me your Newsletter
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-700 text-white font-semibold py-3 px-6 rounded-md mt-4 hover:bg-orange-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 h-68 object-cover"
            src={fx22}
            alt="Newsletter Background"
          />
          <div className="w-full md:w-1/2 bg-zinc-950 text-center p-6">
            <h2 className="text-orange-500 text-lg font-mono font-semibold">
              NEWSLETTER
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h1>
            <h3 className="text-sm md:text-lg text-white mb-4">
              Get the latest updates, offers, and promotions.
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <input
                className="w-full md:w-3/4 p-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 mb-4 md:mb-0 md:mr-4 rounded-md"
                type="email"
                placeholder="Enter your email"
              />
              <button className="px-5 py-2 bg-orange-700 text-white font-semibold rounded-md hover:bg-orange-600">
                Subscribe
              </button>
            </div>
            <p className="text-lg mt-4 text-white">
              Call for Reservation
              <a href="tel:+2349160002472">
                <span className="text-orange-500 underline ml-2">
                  +234 916 000 2472
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <FooterPage />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-10 bg-orange-500 text-white p-3 w-10 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}
