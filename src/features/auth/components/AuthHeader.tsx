import { moderateScale } from "@/lib/normalize";
import {
  Box,
  LinearGradient,
  Text,
  Theme,
  TouchableOpacity,
} from "@/lib/restyle";
import Logo from "@/shared/svg/Logo";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function AuthHeader() {
  const { sizes, colors } = useTheme<Theme>();

  const { top } = useSafeAreaInsets();

  return (
    <Box
      position="absolute"
      height={sizes.authHeaderHeight + top}
      width={sizes.screenWidth}
      left={0}
      top={0}
      paddingHorizontal="screenPadding"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="xs"
    >
      <LinearGradient
        position="absolute"
        colors={[colors.appBg, "transparent"]}
        height={sizes.authHeaderHeight + top}
        width={sizes.screenWidth}
        left={0}
        top={0}
      />
      <Logo />
      <Text
        textTransform="uppercase"
        variant="bodySecondary"
        fontStyle="italic"
        color="bodyText"
      >
        Your cinema anytime
      </Text>
      <TouchableOpacity
        marginLeft="auto"
        height={moderateScale(40)}
        width={moderateScale(40)}
        backgroundColor="languageButton"
        alignItems="center"
        justifyContent="center"
        borderRadius="button"
        borderWidth={1}
        borderColor="inputBorder"
      >
        <Text>EN</Text>
      </TouchableOpacity>
    </Box>
  );
}
export default AuthHeader;
