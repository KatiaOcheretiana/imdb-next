import React, { Suspense } from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 p-4 bg-amber-100 lg:text-lg justify-center gap-8">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
