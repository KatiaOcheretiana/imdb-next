import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function MovieInfo({ movieData }) {
  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row gap-7  ">
      <Image
        alt={movieData.original_title}
        src={`https://image.tmdb.org/t/p/original${
          movieData.poster_path || movieData.backdrop_path
        }`}
        width="400"
        height={"200"}
        className="rounded-lg"
      />

      <div className="flex  flex-col gap-6  relative pt-14">
        {movieData.vote_average && (
          <div className="flex flex-col absolute top-0 right-0 ">
            <h3 className="opacity-70 font-semibold">IMDb RATING</h3>
            <div className="flex flex-row gap-2 items-center">
              <FaStar className="stroke-amber-600 fill-amber-600" />
              <p className="font-semibold">
                {movieData.vote_average?.toFixed(1)}
                <span className="opacity-70 text-sm">/10</span>
              </p>
            </div>
          </div>
        )}

        <h2 className="font-bold text-lg ">
          {movieData.title || movieData.original_name}
        </h2>
        <p className="text-md">{movieData.overview}</p>
        <p className="flex items-center">
          <span className="font-semibold">Date Released: </span>{" "}
          {movieData.release_date || movieData.first_air_date}
        </p>
        <p>
          <span className="font-semibold">Genre: </span>
          {movieData.genres?.map((item, index) => (
            <span key={item.id}>
              {item.name}
              {index < movieData.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
