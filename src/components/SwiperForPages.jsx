"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function SwiperForPages({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={7}
        freeMode={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className="max-h-70 mt-7 mb-7"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex h-full w-full items-center justify-center "
          >
            <Link href={`/movie/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="Images from the movie"
                className="block object-cover"
                width={200}
                height={300}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
