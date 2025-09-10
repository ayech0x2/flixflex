import { Box, Text, Theme } from "@/lib/restyle";
import Logo from "@/shared/svg/Logo";
import { useTheme } from "@shopify/restyle";
import * as React from "react";

function Sync() {
  const { sizes } = useTheme<Theme>();

  return (
    <Box
      flex={1}
      backgroundColor="appBg"
      width={sizes.screenWidth}
      alignItems="center"
      justifyContent="center"
      gap="s"
    >
      <Logo />
      <Text>Is syncing your data</Text>
      <Text variant="bodySecondary">
        Please wait while we sync your data...
      </Text>
    </Box>
  );
}

export default Sync;
