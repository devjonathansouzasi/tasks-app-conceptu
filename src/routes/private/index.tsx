import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteNames } from "../../constants/routeNames";
import { Home } from "../../screens/Home";
import { PrivateStackParamList } from "../types";

const Stack = createNativeStackNavigator<PrivateStackParamList>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.PRIVATE.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={RouteNames.PRIVATE.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
