import { Box, Text } from "@/lib/restyle";

function ListHeader({ title }: { title: string }) {
  return (
    <Box
      paddingHorizontal="screenPadding"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text variant="sectionTitle">{title}</Text>
    </Box>
  );
}

export default ListHeader;
