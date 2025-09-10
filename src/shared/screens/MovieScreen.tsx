import { MoviesScreenProps } from "@/features/movies/types";
import { moderateScale } from "@/lib/normalize";
import { Box, Image, Pressable, Text, Theme } from "@/lib/restyle";
import VideoList from "@/shared/components/VideoList";
import { useMovie } from "@/shared/services/useMovie";
import { useMovieVideos } from "@/shared/services/useMovieVideos";
import CircleLeftIcon from "@/shared/svg/CircleLeftIcon";
import StarIcon from "@/shared/svg/StarIcon";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeScreenProps } from "../../features/home/types";

type MovieScreenProps = HomeScreenProps<"Movie"> | MoviesScreenProps<"Movie">;

function MovieScreen({ route, navigation }: MovieScreenProps) {
  const { id } = route.params;

  const { data: movie } = useMovie(id);

  const { data: videos } = useMovieVideos(id);

  const { sizes, spacing } = useTheme<Theme>();

  const { top } = useSafeAreaInsets();

  return (
    <Box>
      <Pressable
        zIndex={1}
        position="absolute"
        top={top}
        left={spacing.screenPadding}
        onPress={navigation.goBack}
      >
        <CircleLeftIcon size={moderateScale(30)} />
      </Pressable>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w342${movie?.backdrop_path}`,
        }}
        width={sizes.screenWidth}
        height={sizes.screenWidth / 1.77}
      />

      <Box padding="screenPadding" gap="s">
        <Text variant="title">{movie?.title}</Text>
        <VideoList videos={videos || []} />
        <InfoItem title="Genres">
          <Box flexDirection="row" flexWrap="wrap" gap="xs">
            <Text>{movie?.genres.map((genre) => genre.name).join(", ")}</Text>
          </Box>
        </InfoItem>
        <InfoItem title="Release date">
          <Text>{new Date(movie?.release_date || "").getFullYear()}</Text>
        </InfoItem>
        <InfoItem title="Vote average">
          <Box flexDirection="row" alignItems="center" gap="xs">
            <StarIcon
              color="accent"
              fillColor="accent"
              size={moderateScale(12)}
            />
            <Text>{movie?.vote_average.toFixed(1)}</Text>
            <Text variant="bodySecondary">({movie?.vote_count})</Text>
          </Box>
        </InfoItem>
        <InfoItem title="Overview">
          <Text>{movie?.overview}</Text>
        </InfoItem>
      </Box>
    </Box>
  );
}

export default MovieScreen;

const InfoItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box gap="xs">
      <Text variant="bodySecondary">{title}</Text>
      {children}
    </Box>
  );
};
