import { moderateScale } from "@/lib/normalize";
import {
  Box,
  LinearGradient,
  Text,
  Theme,
  TouchableOpacity,
} from "@/lib/restyle";
import { themeAtom } from "@/shared/atoms";
import CloudIcon from "@/shared/svg/CloudIcon";
import Logo from "@/shared/svg/Logo";
import SunIcon from "@/shared/svg/SunIcon";
import { useTheme } from "@shopify/restyle";
import { useAtom } from "jotai";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function AuthHeader() {
  const { sizes, colors } = useTheme<Theme>();

  const [theme, setTheme] = useAtom(themeAtom);

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
        onPress={() => setTheme(theme === "LIGHT" ? "DARK" : "LIGHT")}
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
        {theme === "LIGHT" ? (
          <CloudIcon size={"large"} />
        ) : (
          <SunIcon size={"large"} />
        )}
      </TouchableOpacity>
    </Box>
  );
}
export default AuthHeader;
