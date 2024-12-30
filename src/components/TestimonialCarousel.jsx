import React from "react";
import { motion } from "framer-motion";
import "../TestimonialCarousel.css";
import female from "../assets/female.jpg";
import male from "../assets/male.jpg";
import female1 from "../assets/female1.jpg";
import male1 from "../assets/male1.jpg";

const testimonials = [
  {
    comment: "This is an amazing product! It helped me organize my tasks much more efficiently. I no longer miss deadlines and feel more in control of my work.",
    user: "John Doe",
    profilePic: male,
  },
  {
    comment: "Absolutely loved the service! The team was so responsive and helped me with every question I had. I felt supported throughout the entire process.",
    user: "Emma Smith",
    profilePic: female,
  },
  {
    comment: "Highly recommend to everyone. I had trouble finding a reliable tool for managing projects. This product solved all my problems with ease and efficiency.",
    user: "Michael Johnson",
    profilePic: male1,
  },
  {
    comment: "Exceptional experience! The customer support team went above and beyond to resolve an issue I had. I’ve never felt so valued as a customer before.",
    user: "Olivia Brown",
    profilePic: female1,
  },
  {
    comment: "Will use again for sure. The features of this product are exactly what I needed for my business. It saved me time and money by streamlining the whole process.",
    user: "Liam Williams",
    profilePic: male,
  },
  {
    comment: "This tool helped me to automate repetitive tasks. It cut down on my manual work and improved my productivity dramatically. I’m extremely happy with it.",
    user: "Ava Martinez",
    profilePic: female,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="testimonial-section" aria-label="Testimonials">
      <h2>What Users Say</h2>
      <p id="description">Testimonials that speak louder than words! Customer stories that light up our day.</p>
      <div className="carousel">
        <motion.div className="carousel-track">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              animate={{
                y: index % 2 === 0 ? [30, -30, 30] : [-30, 30, -30], 
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="profile">
                <img
                  src={testimonial.profilePic}
                  alt={`${testimonial.user} profile`}
                  className="profile-pic"
                />
                <h4 className="user-name">{testimonial.user}</h4>
              </div>
              <p className="comment">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
