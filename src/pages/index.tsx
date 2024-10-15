import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import axios from "axios";
import { SearchBar } from "@/components/SearchBar";
import { Movie } from "@/types/movies";
import { MovieCard } from "@/components/MovieCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header></header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>
          <div className="flex gap-2 items-end">
            <SearchBar onSearch={setMovies} />
          </div>
        </section>
        <section>
          <div className="flex flex-wrap gap-6">
            {movies.map(({ title, poster_path, id, overview }) => (
              <MovieCard
                title={title}
                imageUrl={poster_path}
                key={id}
                id={id}
                description={overview}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
