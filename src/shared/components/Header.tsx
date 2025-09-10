import { moderateScale } from "@/lib/normalize";
import { Box, TouchableOpacity } from "@/lib/restyle";
import { useAtom } from "jotai";
import { themeAtom } from "../atoms";
import CloudIcon from "../svg/CloudIcon";
import Logo from "../svg/Logo";
import SunIcon from "../svg/SunIcon";

function Header() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="s"
      paddingHorizontal="screenPadding"
      paddingVertical="s"
    >
      <Box flex={1}>
        <Logo />
      </Box>
      <Button onPress={() => setTheme(theme === "LIGHT" ? "DARK" : "LIGHT")}>
        {theme === "LIGHT" ? (
          <CloudIcon size={"large"} />
        ) : (
          <SunIcon size={"large"} />
        )}
      </Button>
    </Box>
  );
}

export default Header;

const Button = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      marginLeft="auto"
      height={moderateScale(40)}
      width={moderateScale(40)}
      backgroundColor="languageButton"
      alignItems="center"
      justifyContent="center"
      borderRadius="button"
      borderColor="inputBorder"
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
