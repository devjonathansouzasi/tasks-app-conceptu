import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteNames } from "../constants/routeNames";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.PUBLIC.ROOT}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={RouteNames.PUBLIC.ROOT} component={PublicRoutes} />
      <Stack.Screen name={RouteNames.PRIVATE.ROOT} component={PrivateRoutes} />
    </Stack.Navigator>
  );
};

export default RootRoutes;
