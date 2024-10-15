export type Movie = {
  title: string;
  poster_path: string;
  overview: string;
  id: string;
};

export type MovieApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
