"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Basic Swiper styles
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Vin Howard",
    role: "CEO, Traveller",
    image: "https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
];

export default function ClientFeedBack() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] lg:min-h-[100vh] px-4">
      {/* Section Heading */}
      <div className="text-center text-[#020615] flex flex-col items-center mb-8">
        <p className="text-xl font-[caveat] text-[#560ce3] font-bold mb-1">Clients Feedback About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">See Those Lovely Words From Clients</h1>
        <p className="text-[#353844] capitalize text-lg md:max-w-[50%]">
          Are you tired of the typical tourist destinations and looking to step out of your comfort zone?
        </p>
      </div>

      {/* Swiper Container */}
      <div className="max-w-5xl w-full mx-auto">
        <Swiper
          // Remove pagination, only autoplay
          loop
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          // Breakpoints for responsive slides
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md text-start w-full box-border">
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <FaQuoteRight className="text-gray-100 text-2xl ml-auto" />
                </div>

                <p className="italic text-[16px] text-gray-600 mt-4">“{testimonial.review}”</p>

                <div className="flex justify-center mt-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
