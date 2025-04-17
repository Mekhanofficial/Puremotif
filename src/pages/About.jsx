import HeaderPage from "../components/Header";
import bg from "../pictures/bg.jpg";
import dp1 from "../pictures/dp1.jpg";
import dp2 from "../pictures/dp2.jpg";
import dp3 from "../pictures/dp3.jpg";
import dp4 from "../pictures/dp4.jpg";
import dp5 from "../pictures/dp5.jpg";
import dp6 from "../pictures/dp6.jpg";
import fx5 from "../pictures/fx5.jpg";
import fx1 from "../pictures/bg.jpg";
import fx22 from "../pictures/fx22.jpg";
import px21 from "../pictures/px21.jpg";
import chef from "../pictures/chef.png";
import quote from "../pictures/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FooterPage from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    // Handle the scroll event to toggle the "Scroll to Top" button
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
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

   const testimonials = [
     {
       text: "The Mealsgraffiti is my go-to place for celebrating special occasions. Their food is always delightful and full of flavor.",
       name: "Michael Williamson",
       position: "Food Critic, Local Eats",
       image: dp1,
       rightImage: quote,
     },
     {
       text: "The dining experience at The Mealsgraffiti is unmatched! The chefs truly outdo themselves with every dish.",
       name: "david Johnson",
       position: "Restaurant Owner, Taste Haven",
       image: dp2,
       rightImage: quote,
     },
     {
       text: "I love the cozy atmosphere and the excellent service at The Mealsgraffiti. Perfect for a relaxed evening with amazing food.",
       name: "sarah Doe",
       position: "Chef, Gourmet Bistro",
       image: dp3,
       rightImage: quote,
     },
     {
       text: "The Mealsgraffiti delivers exceptional quality food with a unique taste that keeps me coming back for more.",
       name: "Bill Watson",
       position: "Food Stylist, Elegant Plates",
       image: dp4,
       rightImage: quote,
     },
     {
       text: "A hidden gem for food lovers! The Mealsgraffiti's unique menu surprises me in the best way possible every time.",
       name: "Jason Brown",
       position: "Food Blogger, The Flavor Journey",
       image: dp5,
       rightImage: quote,
     },
     {
       text: "Every meal at The Mealsgraffiti feels like a celebration of flavors. Truly an unforgettable dining experience.",
       name: "Jessica Adams",
       position: "Gastronomy Enthusiast, Taste Explorers",
       image: dp6,
       rightImage: quote,
     },
   ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => <div className="custom-dot"></div>,
    appendDots: (dots) => (
      <ul className="slick-dots mt-2">{dots.slice(0, 2)}</ul>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section style={{ overflowX: "hidden" }}>
        <HeaderPage />
        <div
          className="relative flex -mt-24 top-1 items-center justify-center text-center"
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
            src={px21}
            alt="Background image showcasing a restaurant or food ambiance"
          />
          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-white text-5xl">About Us</h1>
            <h3 className="text-orange-700 font-semibold text-xl mt-2">
              <Link to="/">HOME-</Link>ABOUT US
            </h3>
          </motion.div>
        </div>

        <div
          className="relative px-5 sm:px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 "
          style={{
            backgroundImage: `url(${fx5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // Keeps height consistent
            maxHeight: "100vh", // Prevents background from becoming too long
            color: "white",
          }}
        >
          {/* Image Section (Left Side) */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={chef}
              alt="Restaurant Interior"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section (Right Side) */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-orange-500 font-mono font-semibold">
              FRESH FLAVORS, UNLIMITED POSSIBILITIES
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4">
              Experience Culinary Excellence <br className="hidden md:block" />{" "}
              and Timeless Tradition
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-gray-300 leading-relaxed">
              The Mealsgraffiti isn't just a restaurant; it's a celebration of
              flavor <br className="hidden md:block" />
              crafted by chefs who pour their soul into every dish. Bold,
              inventive, and unforgettable.
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
              Ready for a taste explosion?{" "}
              <a
                href="tel:+2349160002471"
                className="text-orange-500 underline ml-2"
              >
                Call +01234 567 891 for Reservations
              </a>
            </h3>

            {/* Button linking to the menu page */}
            <Link to="/menu">
              <button className="border-2 border-gray-500 font-semibold mt-4 md:mt-8 p-2 md:p-3 w-full md:w-auto md:px-6 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
                Explore the Full Menu
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative text-white font-semibold py-10"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger only once when the section is in view
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-80"></div>

          {/* Header */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-orange-500 mb-5 text-lg md:text-xl">
              TESTIMONIALS
            </h1>
            <h3 className="text-2xl md:text-4xl mb-10 md:mb-20">
              Reviews about our test
            </h3>
          </motion.div>

          {/* Slider */}
          <Slider
            {...settings}
            className="max-w-6xl text-left mx-auto slider-with-gap"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-zinc-950 text-white p-5 md:p-8 font-semibold flex flex-col justify-between"
                style={{
                  minHeight: "300px",
                  margin: "0 15px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: index * 0.2 }} // Stagger effect for slides
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-lg md:text-xl flex-grow">
                    {testimonial.text}
                  </h4>
                  <img
                    className="flex-shrink-0 ml-3"
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                    src={testimonial.rightImage}
                    alt={`${testimonial.name} - Quote Icon`}
                  />
                </div>
                <div className="flex items-center gap-5">
                  <img
                    className="flex-shrink-0"
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="flex-grow">
                    <h5 className="text-orange-500 text-lg md:text-xl">
                      {testimonial.name}
                    </h5>
                    <h5 className="text-sm md:text-base">
                      {testimonial.position}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

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
      </section>
    </>
  );
}
