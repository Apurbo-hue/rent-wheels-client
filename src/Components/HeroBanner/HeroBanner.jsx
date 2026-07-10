import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroBanner = () => {
    return (
<div className="my-12 w-11/12 mx-auto">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >

        {/* Slide 1 */}
        <SwiperSlide>

          <div className="hero min-h-[450px] bg-gradient-to-r from-slate-900 to-gray-700   text-white rounded-2xl">

            <div className="hero-content text-center">

              <div>

                <h1 className="text-5xl font-bold">
                  Premium Car Collection
                </h1>

                <p className="py-6 max-w-2xl mx-auto">
                  Choose from luxury sedans, SUVs, sports cars, and family
                  vehicles at affordable daily rates.
                </p>

                <button className="btn btn-warning">
                  Browse Cars
                </button>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>

          <div className="hero min-h-[450px] bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-2xl">

            <div className="hero-content text-center">

              <div>

                <h1 className="text-5xl font-bold">
                  Fast & Easy Booking
                </h1>

                <p className="py-6 max-w-2xl mx-auto">
                  Reserve your dream car in just a few clicks with secure
                  online booking.
                </p>

                <button className="btn btn-primary">
                  Book Now
                </button>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* Slide 3 */}

        <SwiperSlide>

          <div className="hero min-h-112.5 bg-linear-to-r from-green-900 to-green-600 text-white rounded-2xl">

            <div className="hero-content text-center">

              <div>

                <h1 className="text-5xl font-bold">
                  Trusted by Thousands
                </h1>

                <p className="py-6 max-w-2xl mx-auto">
                  Clean vehicles, verified owners, transparent pricing,
                  and excellent customer support.
                </p>

                <button className="btn btn-success">
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </div>
    );
};

export default HeroBanner;