import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results && results.map((el) => <Card data={el} key={el.id} />)}
    </ul>
  );
}
