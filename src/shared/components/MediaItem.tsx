import { moderateScale } from "@/lib/normalize";
import { Box, Image, Text, TouchableOpacity } from "@/lib/restyle";
import StarIcon from "@/shared/svg/StarIcon";
import { TmdbItem } from "../types";

const PORTRAIT_WIDTH = moderateScale(120);
const PORTRAIT_HEIGHT = PORTRAIT_WIDTH * 1.5;

const LANDSCAPE_WIDTH = moderateScale(250);
const LANDSCAPE_HEIGHT = LANDSCAPE_WIDTH / 1.77;

function MediaItem(
  props: TmdbItem & {
    mode: "PORTRAIT" | "LANDSCAPE";
    // eslint-disable-next-line unused-imports/no-unused-vars
    navigateToOne?: (id: number) => void | undefined;
  },
) {
  const title = "title" in props ? props.title : props.name;
  const date =
    "release_date" in props ? props.release_date : props.first_air_date;

  return (
    <TouchableOpacity gap="xs" onPress={() => props.navigateToOne?.(props.id)}>
      <Image
        width={props.mode === "PORTRAIT" ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH}
        height={props.mode === "PORTRAIT" ? PORTRAIT_HEIGHT : LANDSCAPE_HEIGHT}
        source={{
          uri: `https://image.tmdb.org/t/p/w185${props.poster_path}`,
        }}
      />
      <Text
        numberOfLines={1}
        maxWidth={props.mode === "PORTRAIT" ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH}
      >
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
    </TouchableOpacity>
  );
}
export default MediaItem;
