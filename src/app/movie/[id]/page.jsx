import React from "react";
import { API_KEY } from "../../page";
import MovieInfo from "../../../components/MovieInfo";
import SwiperImage from "../../../components/SwiperImage";

export default async function MoviePage({ params }) {
  const requestInfo =
    await fetch(`https://api.themoviedb.org/3/movie/${params.id}
      ?api_key=${API_KEY}`);
  const movieData = await requestInfo.json();

  const requestImages = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}`
  );
  const movieImages = await requestImages.json();
  const firstTenImages = movieImages.backdrops
    ? movieImages.backdrops.slice(0, 25)
    : [];

  return (
    <div className="w-full  max-w-6xl mx-auto py-4">
      <MovieInfo movieData={movieData} />
      <SwiperImage images={firstTenImages} />
    </div>
  );
}
