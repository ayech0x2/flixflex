import http from "@/lib/http";
import { USE_SERIE_QUERY_KEY } from "@/shared/services/keys";
import { TmdbSeriesDetail } from "@/shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const queryFn = async (id: number) => {
  const response = await http.get<TmdbSeriesDetail>(
    `/tv/${id}?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return response.data;
};

const useSerie = (id: number): UseQueryResult<TmdbSeriesDetail, Error> => {
  return useQuery({
    queryFn: () => queryFn(id),
    queryKey: [USE_SERIE_QUERY_KEY, id],
  });
};

export { useSerie };
