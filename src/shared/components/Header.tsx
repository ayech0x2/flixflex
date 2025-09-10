import { moderateScale } from "@/lib/normalize";
import { Box, TouchableOpacity } from "@/lib/restyle";
import Logo from "../svg/Logo";
import SunIcon from "../svg/SunIcon";

function Header() {
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
      <Button>
        <SunIcon size={"large"} />
      </Button>
    </Box>
  );
}

export default Header;

const Button = ({ children }: { children: React.ReactNode }) => {
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
    >
      {children}
    </TouchableOpacity>
  );
};
