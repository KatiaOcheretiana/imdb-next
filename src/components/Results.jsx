import Image from "next/image";
import React from "react";

export default function Results({ results }) {
  return (
    <ul>
      {results &&
        results.map((el) => (
          <li key={el.id}>
            <Image
              alt={el.original_title}
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              width="200"
              height={"100"}
            />
            <p>{el.original_title}</p>
          </li>
        ))}
    </ul>
  );
}
