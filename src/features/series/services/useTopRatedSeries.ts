import http from "@/lib/http";
import { USE_TOP_RATED_SERIES_QUERY_KEY } from "@/shared/services/keys";
import { TmdbItem } from "@/shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const queryFn = async () => {
  const response = await http.get<{ results: Array<TmdbItem> }>(
    `/tv/top_rated?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return response.data.results.slice(0, 5);
};

const useTopRatedSeries = (): UseQueryResult<Array<TmdbItem>, Error> => {
  return useQuery({
    queryFn,
    queryKey: [USE_TOP_RATED_SERIES_QUERY_KEY],
  });
};

export { useTopRatedSeries };
