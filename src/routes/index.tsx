import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteNames } from "../constants/routeNames";
import { useAuthentication } from "../hooks/useAuthentication";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoutes = () => {
  const { user } = useAuthentication();

  return (
    <Stack.Navigator
      initialRouteName={RouteNames.PUBLIC.ROOT}
      screenOptions={{ headerShown: false }}
    >
      {user ? (
        <Stack.Screen name={RouteNames.PRIVATE.ROOT} component={PrivateRoutes} />
      ) : (
        <Stack.Screen name={RouteNames.PUBLIC.ROOT} component={PublicRoutes} />
      )}
    </Stack.Navigator>
  );
};

export default RootRoutes;
