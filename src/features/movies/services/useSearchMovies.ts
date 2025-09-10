import http from "@/lib/http";
import { USE_SEARCH_MOVIES_QUERY_KEY } from "@/shared/services/keys";
import { TmdbItem, TmdbPagination } from "@/shared/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const queryFn = async (pageParam: number, term: string) => {
  const response = await http.get<TmdbPagination<TmdbItem>>(
    `/search/movie?api_key=${process.env.EXPO_PUBLIC_TMDB_API_KEY}&page=${pageParam}&query=${term}`,
  );
  return response.data;
};

const useSearchMovies = (term: string) => {
  const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
    useInfiniteQuery<TmdbPagination<TmdbItem>, Error>({
      enabled: term.length > 0,
      queryFn: ({ pageParam }) => queryFn(pageParam as number, term),
      queryKey: [USE_SEARCH_MOVIES_QUERY_KEY, term],
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

export { useSearchMovies };
