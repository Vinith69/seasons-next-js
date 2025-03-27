"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ClientFeedBack = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="relative z-10 text-center text-[#020615] px-4 flex flex-col items-center">
        <p className="text-xl md:text-xl font-[caveat] text-[#560ce3] font-bold mb-1">Clients Feedback About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">See Those Lovely Words From Clients</h1>
        <p className="text-[#353844] text-center capitalize text-lg md:max-w-1/2">
          Are you tired of the typical tourist destinations and looking to step out of your comfort zonetravel
        </p>
      </div>
      <TestimonialSlider />
    </section>
  );
};

export default ClientFeedBack;

const testimonials = [
  {
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "	https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "	https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "	https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Vin Howard",
    role: "CEO, Traveller",
    image: "	https://seasons.jdprojects.in/assets/img/testimonial/avatar-3.png",
    review: "Morem Ipsum Dolor Siter Amet Areaeey Consec Taetur Adipisc Service Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
];

function TestimonialSlider() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        // pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md text-start">
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
  );
}
