import { moderateScale } from "@/lib/normalize";
import { Box, Image, Pressable, Text, Theme } from "@/lib/restyle";
import VideoList from "@/shared/components/VideoList";
import { useSerie } from "@/shared/services/useSerie";
import { useSerieVideos } from "@/shared/services/useSerieVideos";
import CircleLeftIcon from "@/shared/svg/CircleLeftIcon";
import StarIcon from "@/shared/svg/StarIcon";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeScreenProps } from "../../features/home/types";

function SerieScreen({ route, navigation }: HomeScreenProps<"Serie">) {
  const { id } = route.params;

  const { data: series } = useSerie(id);

  const { data: videos } = useSerieVideos(id);

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
          uri: `https://image.tmdb.org/t/p/w342${series?.backdrop_path}`,
        }}
        width={sizes.screenWidth}
        height={sizes.screenWidth / 1.77}
      />

      <Box padding="screenPadding" gap="s">
        <Text variant="title">{series?.name}</Text>
        <VideoList videos={videos || []} />
        <InfoItem title="Genres">
          <Box flexDirection="row" flexWrap="wrap" gap="xs">
            <Text>{series?.genres.map((genre) => genre.name).join(", ")}</Text>
          </Box>
        </InfoItem>
        <InfoItem title="Release date">
          <Text>{new Date(series?.first_air_date || "").getFullYear()}</Text>
        </InfoItem>
        <InfoItem title="Vote average">
          <Box flexDirection="row" alignItems="center" gap="xs">
            <StarIcon
              color="accent"
              fillColor="accent"
              size={moderateScale(12)}
            />
            <Text>{series?.vote_average.toFixed(1)}</Text>
            <Text variant="bodySecondary">({series?.vote_count})</Text>
          </Box>
        </InfoItem>
        <InfoItem title="Overview">
          <Text>{series?.overview}</Text>
        </InfoItem>
      </Box>
    </Box>
  );
}

export default SerieScreen;

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
