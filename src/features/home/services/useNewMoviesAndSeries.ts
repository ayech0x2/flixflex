import http from "@/lib/http";
import { USE_NEW_MOVIES_AND_SERIES_QUERY_KEY } from "@/shared/services/keys";
import { TmdbItem } from "@/shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const queryFn = async () => {
  const response = await http.get<{ results: Array<TmdbItem> }>(
    `/discover/movie?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return response.data.results;
};

const useNewMoviesAndSeries = (): UseQueryResult<Array<TmdbItem>, Error> => {
  return useQuery({
    queryFn,
    queryKey: [USE_NEW_MOVIES_AND_SERIES_QUERY_KEY],
  });
};

export { useNewMoviesAndSeries };
