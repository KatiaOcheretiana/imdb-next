"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, FreeMode, Thumbs } from "swiper/modules";

export default function Page({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="min-h-screen py-12">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="max-w-6xl max-h-6xl mt-4 nb-4"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                alt="Images from the movie"
                className="block h-full w-full object-cover"
                width={2000}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                  alt="Images from the movie"
                  width={1000}
                  height={400}
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
