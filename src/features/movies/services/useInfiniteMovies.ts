import http from "@/lib/http";
import { USE_INFINITE_MOVIES_QUERY_KEY } from "@/shared/services/keys";
import { TmdbItem, TmdbPagination } from "@/shared/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const queryFn = async (pageParam: number) => {
  const response = await http.get<TmdbPagination<TmdbItem>>(
    `/movie/popular?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}&page=${pageParam}`,
  );
  return response.data;
};

const useInfiniteMovies = () => {
  const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
    useInfiniteQuery<TmdbPagination<TmdbItem>, Error>({
      queryFn: ({ pageParam }) => queryFn(pageParam as number),
      queryKey: [USE_INFINITE_MOVIES_QUERY_KEY],
      getNextPageParam: (lastPage) => {
        if (!lastPage.total_pages || lastPage.page >= lastPage.total_pages) {
          return undefined;
        }
        return lastPage.page + 1;
      },
      initialPageParam: 1,
    });

  return {
    movies:
      data?.pages.reduce(
        (acc: Array<TmdbItem>, curr) => acc.concat(curr.results),
        [],
      ) || [],
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetching,
  };
};

export { useInfiniteMovies };
