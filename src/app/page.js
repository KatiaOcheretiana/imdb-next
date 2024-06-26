import React, { Suspense } from "react";
import Results from "../components/Results";
import SwiperForPages from "../components/SwiperForPages";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
    // { next: { revalidate: 1000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const results = data.results;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SwiperForPages data={results} />
        <Results results={results} />
      </Suspense>
    </div>
  );
}

export default Home;
