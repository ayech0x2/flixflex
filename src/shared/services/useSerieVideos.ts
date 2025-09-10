import http from "@/lib/http";
import { USE_SERIE_VIDEOS_QUERY_KEY } from "@/shared/services/keys";
import { TmdbVideo } from "@/shared/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const queryFn = async (id: number) => {
  const response = await http.get<{ results: TmdbVideo[] }>(
    `/tv/${id}/videos?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return response.data.results.filter(
    (video) => video.site === "YouTube" && video.type === "Trailer",
  );
};

const useSerieVideos = (id: number): UseQueryResult<TmdbVideo[], Error> => {
  return useQuery({
    queryFn: () => queryFn(id),
    queryKey: [USE_SERIE_VIDEOS_QUERY_KEY, id],
  });
};

export { useSerieVideos };
