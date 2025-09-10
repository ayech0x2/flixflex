import { Theme } from "@/lib/restyle";
import MovieScreen from "@/shared/screens/MovieScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import MoviesScreen from "../screens/MoviesScreen";
import SearchMoviesScreen from "../screens/SearchMoviesScreen";
import { MoviesNavigatorParamList } from "../types";
import { moderateScale } from "@/lib/normalize";

function MoviesNavigator() {
  const Stack = createNativeStackNavigator<MoviesNavigatorParamList>();
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
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="SearchMovies" component={SearchMoviesScreen} />
    </Stack.Navigator>
  );
}

export default MoviesNavigator;
