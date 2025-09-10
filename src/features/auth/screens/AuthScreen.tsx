import AuthHeader from "@/features/auth/components/AuthHeader";
import { AnimatedBox, Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImageBackground from "../components/ImageBackground";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import { AuthNavigatorScreenProps } from "../types";

function AuthScreen({}: AuthNavigatorScreenProps<"Auth">) {
  const [screenName, setScreenName] = React.useState("SIGNIN");

  const { sizes } = useTheme<Theme>();

  const { bottom } = useSafeAreaInsets();

  const imageBackgroundHeight = sizes.screenHeight / 2;

  const paddingBottom =
    screenName === "SIGNIN" ? imageBackgroundHeight / 4 : bottom * 1.5;

  return (
    <AnimatedBox
      entering={FadeIn}
      exiting={FadeOut}
      flex={1}
      justifyContent="flex-end"
      style={{
        paddingBottom,
      }}
    >
      <ImageBackground imageBackgroundHeight={imageBackgroundHeight} />
      <AuthHeader />
      {screenName === "SIGNIN" && (
        <AnimatedBox
          entering={FadeInLeft.duration(300).easing(Easing.inOut(Easing.quad))}
          exiting={FadeOutLeft.duration(300).easing(Easing.inOut(Easing.quad))}
        >
          <SigninForm navigateToSignup={() => setScreenName("SIGNUP")} />
        </AnimatedBox>
      )}
      {screenName === "SIGNUP" && (
        <AnimatedBox
          entering={FadeInRight.duration(300).easing(Easing.inOut(Easing.quad))}
          exiting={FadeOutRight.duration(300).easing(Easing.inOut(Easing.quad))}
        >
          <SignupForm navigateToSignin={() => setScreenName("SIGNIN")} />
        </AnimatedBox>
      )}
    </AnimatedBox>
  );
}

export default AuthScreen;
