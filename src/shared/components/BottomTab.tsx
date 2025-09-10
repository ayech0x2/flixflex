import { Box, Theme } from "@/lib/restyle";
import { BottomTabNavigatorParamList } from "@/navigation/types";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FlashIcon from "../svg/FlashIcon";
import MovieIcon from "../svg/MovieIcon";
import SeriesIcon from "../svg/SeriesIcon";
import UserIcon from "../svg/UserIcon";

function BottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  const { bottom } = useSafeAreaInsets();

  const { sizes } = useTheme<Theme>();

  const renderIcon = (
    name: keyof BottomTabNavigatorParamList,
    isFocused: boolean,
  ) => {
    switch (name) {
      case "HomeNavigator":
        return <FlashIcon color={isFocused ? "accent" : "bodyText"} />;
      case "MoviesNavigator":
        return <MovieIcon color={isFocused ? "accent" : "bodyText"} />;
      case "SeriesNavigator":
        return <SeriesIcon color={isFocused ? "accent" : "bodyText"} />;
      default:
        return <UserIcon color={isFocused ? "accent" : "bodyText"} />;
    }
  };
  return (
    <Box
      flexDirection="row"
      height={sizes.bottomTabHeight}
      alignItems="center"
      style={{ paddingBottom: bottom }}
      borderTopWidth={1}
      borderTopColor="inputBorder"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1 }}
          >
            <Box flex={1} alignItems="center" justifyContent="center">
              {renderIcon(
                route.name as keyof BottomTabNavigatorParamList,
                isFocused,
              )}
            </Box>
          </PlatformPressable>
        );
      })}
    </Box>
  );
}

export default BottomTab;
