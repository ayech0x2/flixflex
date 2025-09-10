import { moderateScale } from "@/lib/normalize";
import { Box, Image, Text } from "@/lib/restyle";
import StarIcon from "@/shared/svg/StarIcon";
import { MediaItemProps } from "@/shared/types";

const WIDTH = moderateScale(120);

function MediaItem({ title, year, rating, image }: MediaItemProps) {
  return (
    <Box gap="xs">
      <Image
        width={WIDTH}
        height={WIDTH * 1.5}
        source={{
          uri: image,
        }}
      />
      <Text numberOfLines={1} maxWidth={WIDTH}>
        {title}
      </Text>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="bodySecondary">{year}</Text>
        <Box flexDirection="row" alignItems="center" gap="xs">
          <StarIcon
            color="accent"
            fillColor="accent"
            size={moderateScale(12)}
          />
          <Text variant="bodySecondary">{rating}</Text>
        </Box>
      </Box>
    </Box>
  );
}
export default MediaItem;
