import { Movie } from "@/types/movies";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import debounce from "lodash/debounce";

type Props = {
  onSearch: Dispatch<SetStateAction<Movie[]>>;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleDebouncedSearch = debounce(async () => {
      const response = await axios.get(`/api/searchMovies?query=${query}`);
      if (response.status === 200) {
        console.log("🚀 ~ handleDebouncedSearch ~ response:", response);
        onSearch(response.data.results);
      } else {
        setError("Oops, something went wrong when searching your movie");
      }
    }, 300);
    handleDebouncedSearch();
  }, [query]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center flex-wrap">
        <label className="flex gap-2 items-center flex-wrap">
          Search a movie
          <input
            className="border border-gray-200 rounded-md p-2"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {/* <button
          className="p-2 bg-pink-300 rounded-md hover:bg-pink-400"
          onClick={() => handleSearch()}
        >
          Search
        </button> */}
      </div>
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};
