import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeaderPage from "../components/Header";
import FooterPage from "../components/Footer";
import { motion } from "framer-motion";
import px23 from "../pictures/px23.jpg";
import fx28 from "../pictures/fx28.jpg";
import fx21 from "../pictures/fx21.jpg";
import fx20 from "../pictures/fx20.jpg";
import fx22 from "../pictures/fx22.jpg";
import dx3 from "../pictures/dx3.jpg";
import fx26 from "../pictures/fx26.jpg";
import px28 from "../pictures/px28.jpg";

export default function BlogPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Blog posts array with additional posts
  const blogPosts = [
    {
      image: px28,
      date: "January 9, 2025",
      author: "Rose",
      title: "New menu added. You can exchange your taste",
    },
    {
      image: fx20,
      date: "November 29, 2024",
      author: "Abraham",
      title: "Explore our exciting menu updates for a new experience",
    },
    {
      image: px23,
      date: "July 1, 2024",
      author: "Shady",
      title: "Discover our chef's specials crafted with love",
    },
    // New blog posts
    {
      image: fx26,
      date: "December 10, 2024",
      author: "John",
      title: "Introducing our seasonal menu:taste of winter warmth",
    },
    {
      image: fx21,
      date: "August 15, 2023",
      author: "Emily",
      title: "How our chefs are inspired by local flavors",
    },
    {
      image: fx28,
      date: "January 5, 2025",
      author: "Alex",
      title: "Behind the scenes: A day in the life of a chef",
    },
  ];

  return (
    <>
      <section className="overflow-x-hidden">
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
            src={dx3}
            alt="Background image showcasing a restaurant or food ambiance"
          />

          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-5xl text-white">Our Blog</h1>
            <h3 className="text-orange-700 font-semibold text-xl mt-2">
              <Link to="/">HOME-</Link>PAGES-BLOG
            </h3>
          </motion.div>
        </div>

        {/* Blog Posts Section */}
        <motion.div
          className="relative"
          style={{
            backgroundImage: `url(${fx21})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-95"></div>

          <motion.div
            className="text-center py-10 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-orange-500 text-xl font-mono font-semibold">
              OUR BLOG
            </h1>
            <h3 className="text-4xl md:text-6xl mb-10 font-semibold text-white">
              Latest Blog Post
            </h3>
            <motion.div
              className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 text-left text-white font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:skew-y-3"
                      src={post.image}
                      alt={`Blog post ${index + 1}`}
                    />
                  </div>
                  <div className="bg-teal-950 p-5">
                    <h3 className="text-orange-500 mb-2">
                      Date: {post.date} / By: {post.author}
                    </h3>
                    <h2 className="text-lg md:text-2xl mb-2">{post.title}</h2>
                    <h2>
                      Read more{" "}
                      <span>
                        <FontAwesomeIcon
                          className="h-4 w-5 text-gray-300"
                          icon={faLongArrowRight}
                        />
                      </span>
                    </h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
       <div className="flex flex-col md:flex-row relative z-10 bg-zinc-900">
                <motion.img
                  className="w-full md:w-1/2 h-48 md:h-72"
                  src={fx22}
                  alt="Newsletter Background"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="w-full md:w-1/2 bg-zinc-950 text-center p-4 md:p-6"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-orange-500 text-lg md:text-2xl font-mono font-semibold mb-3">
                    NEWSLETTER
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    Subscribe to Our Newsletter
                  </h1>
                  <h3 className="text-sm md:text-lg text-white mb-4">
                    To get the latest updates, offers, and promotions
                  </h3>
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    <input
                      className="w-full md:w-3/4 p-3 bg-transparent border-2 border-zinc-600 text-white placeholder-zinc-400 mb-4 md:mb-0 md:mr-4"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="w-full md:w-auto px-5 py-2 text-zinc-800 font-semibold bg-white hover:bg-orange-500 hover:text-white transition">
                      Subscribe
                    </button>
                  </div>
                  <h3 className="text-lg md:text-xl mt-4 text-white">
                    Call for Reservation
                    <a href="tel:+2349160002472">
                      <span className="text-orange-500 underline ml-2">
                        +234 916 000 2472
                      </span>
                    </a>
                  </h3>
                </motion.div>
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
