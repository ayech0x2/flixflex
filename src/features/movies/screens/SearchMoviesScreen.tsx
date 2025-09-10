import { moderateScale } from "@/lib/normalize";
import { Box, SafeAreaView, TouchableOpacity } from "@/lib/restyle";
import InfiniteMediaList from "@/shared/components/InfiniteMediaList";
import TextInput from "@/shared/components/TextInput";
import useDebounce from "@/shared/hooks/useDebounce";
import BackIcon from "@/shared/svg/BackIcon";
import SearchIcon from "@/shared/svg/SearchIcon";
import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";
import { useSearchMovies } from "../services/useSearchMovies";
import { MoviesScreenProps } from "../types";

function SearchMoviesScreen({ navigation }: MoviesScreenProps<"SearchMovies">) {
  const [term, setTerm] = React.useState("");

  //@ts-ignore
  const inputRef = React.useRef<TextInput>(null);

  const debouncedTerm = useDebounce(term);

  const { movies, fetchNextPage, hasNextPage, isFetching, refetch } =
    useSearchMovies(debouncedTerm || "");

  useFocusEffect(
    React.useCallback(() => {
      inputRef.current?.focus();
      return () => {
        inputRef.current?.blur();
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <Box
        paddingTop="screenPadding"
        paddingHorizontal="screenPadding"
        paddingBottom="s"
        flexDirection="row"
        alignItems="center"
        gap="s"
      >
        <TouchableOpacity
          onPress={navigation.goBack}
          height={moderateScale(40)}
          width={moderateScale(40)}
          alignItems="center"
          justifyContent="center"
          borderRadius="button"
        >
          <BackIcon size={moderateScale(20)} />
        </TouchableOpacity>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{ flex: 1 }}
          inputRef={inputRef}
          left={<SearchIcon />}
          nativeProps={{
            onChangeText: setTerm,
            value: term,
            placeholder: "Search for a movie...",
          }}
        />
      </Box>
      <InfiniteMediaList
        items={movies || []}
        navigateToOne={(id) => navigation.navigate("Movie", { id })}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        refetch={refetch}
      />
    </SafeAreaView>
  );
}

export default SearchMoviesScreen;
