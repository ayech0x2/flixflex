import { moderateScale } from "@/lib/normalize";
import { Box, Image, Text, Theme, TouchableOpacity } from "@/lib/restyle";
import StarIcon from "@/shared/svg/StarIcon";
import { TmdbItem } from "../types";
import { useTheme } from "@shopify/restyle";

function InfiniteMediaItem(
  props: TmdbItem & {
    // eslint-disable-next-line unused-imports/no-unused-vars
    navigateToOne?: (id: number) => void | undefined;
  },
) {
  const { sizes, spacing } = useTheme<Theme>();

  const title = "title" in props ? props.title : props.name;
  const date =
    "release_date" in props ? props.release_date : props.first_air_date;

  const imageWidth =
    sizes.screenWidth / 2 - spacing.screenPadding / 2 - spacing.m;
  const imageHeight = imageWidth * 1.5;

  return (
    <Box
      width={imageWidth}
      style={{
        paddingHorizontal: spacing.screenPadding,
      }}
    >
      <TouchableOpacity
        gap="xs"
        onPress={() => props.navigateToOne?.(props.id)}
      >
        <Image
          width={imageWidth}
          height={imageHeight}
          source={{
            uri: `https://image.tmdb.org/t/p/w185${props.poster_path}`,
          }}
        />
        <Text numberOfLines={1} width={imageWidth}>
          {title}
        </Text>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          width={imageWidth}
        >
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
      </TouchableOpacity>
    </Box>
  );
}
export default InfiniteMediaItem;
