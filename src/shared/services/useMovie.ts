import http from "@/lib/http";
import { USE_MOVIE_QUERY_KEY } from "@/shared/services/keys";
import { TmdbMovieDetail } from "@/shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const queryFn = async (id: number) => {
  const response = await http.get<TmdbMovieDetail>(
    `/movie/${id}?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return response.data;
};

const useMovie = (id: number): UseQueryResult<TmdbMovieDetail, Error> => {
  return useQuery({
    queryFn: () => queryFn(id),
    queryKey: [USE_MOVIE_QUERY_KEY, id],
  });
};

export { useMovie };
