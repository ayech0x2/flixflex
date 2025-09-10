import { moderateScale } from "@/lib/normalize";
import { AnimatedBox, Box, Text, Theme } from "@/lib/restyle";
import { useAtom } from "jotai";
import { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { alertAtom } from "../atoms";
import * as React from "react";

function Alert() {
  const { top } = useSafeAreaInsets();

  const [alert, setAlert] = useAtom(alertAtom);

  const colorKey =
    alert?.type === "DANGER"
      ? "danger"
      : alert?.type === "SUCCESS"
        ? "success"
        : "warning";

  React.useEffect(() => {
    if (!alert) return;
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 7500);
    return () => clearTimeout(timeout);
  }, [alert, setAlert]);

  if (!alert) return null;

  return (
    <AnimatedBox
      entering={SlideInUp.duration(750)}
      exiting={SlideOutUp.duration(750)}
      zIndex={100}
      position="absolute"
      top={top + moderateScale(10)}
      left={0}
      right={0}
      paddingHorizontal="screenPadding"
    >
      <Box width={"100%"}>
        <Box
          zIndex={1}
          position="absolute"
          left={0}
          top={0}
          backgroundColor={colorKey as keyof Theme["colors"]}
          width={moderateScale(6)}
          height={"100%"}
        />
        <Box
          padding="m"
          backgroundColor="alertBg"
          borderTopRightRadius="alert"
          borderBottomRightRadius="alert"
        >
          <Text variant="alertTitle">{alert.title}</Text>
          <Text color="secondaryBodyText">{alert.message}</Text>
          <Text
            textAlign="right"
            variant="bodySecondary"
            onPress={() => setAlert(null)}
          >
            Dismiss
          </Text>
        </Box>
      </Box>
    </AnimatedBox>
  );
}

export default Alert;
