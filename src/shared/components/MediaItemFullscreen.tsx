import { moderateScale } from "@/lib/normalize";
import { Box, Image, LinearGradient, Text, Theme } from "@/lib/restyle";
import StarIcon from "@/shared/svg/StarIcon";
import { TmdbItem } from "../types";
import { useTheme } from "@shopify/restyle";

function MediaItemFullscreen(props: TmdbItem) {
  const { sizes } = useTheme<Theme>();

  const width = sizes.screenWidth;
  const height = width / 1.77;

  const title = "title" in props ? props.title : props.name;
  const date =
    "release_date" in props ? props.release_date : props.first_air_date;

  return (
    <Box gap="xs">
      <Image
        width={width}
        height={height}
        source={{
          uri: `https://image.tmdb.org/t/p/w342${props.backdrop_path}`,
        }}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        padding="screenPadding"
      >
        <LinearGradient
          position="absolute"
          bottom={0}
          left={0}
          colors={["transparent", "black"]}
          height={height}
          width={width}
        />
        <Text numberOfLines={1} maxWidth={width}>
          {title}
        </Text>
        <Box flexDirection="row" justifyContent="space-between">
          <Text variant="bodySecondary">{new Date(date).getFullYear()}</Text>
          <Box flexDirection="row" alignItems="center" gap="xs">
            <StarIcon
              color="accent"
              fillColor="accent"
              size={moderateScale(12)}
            />
            <Text variant="bodySecondary">{props.vote_average.toFixed(1)}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default MediaItemFullscreen;
