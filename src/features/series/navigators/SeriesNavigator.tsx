import SerieScreen from "@/shared/screens/SerieScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchSeriesScreen from "../screens/SearchSeriesScreen";
import SeriesScreen from "../screens/SeriesScreen";
import { SeriesNavigatorParamList } from "../types";
import { Theme } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import { moderateScale } from "@/lib/normalize";

function SeriesNavigator() {
  const Stack = createNativeStackNavigator<SeriesNavigatorParamList>();
  const {
    colors: { appBg },
  } = useTheme<Theme>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: appBg, paddingTop: moderateScale(10) },
      }}
    >
      <Stack.Screen name="Series" component={SeriesScreen} />
      <Stack.Screen name="Serie" component={SerieScreen} />
      <Stack.Screen name="SearchSeries" component={SearchSeriesScreen} />
    </Stack.Navigator>
  );
}

export default SeriesNavigator;
