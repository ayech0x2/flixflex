import { Box, Text } from "@/lib/restyle";

function ListHeader({ title }: { title: string }) {
  return (
    <Box
      paddingHorizontal="screenPadding"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text variant="title">{title}</Text>
      <Text>See more</Text>
    </Box>
  );
}

export default ListHeader;
