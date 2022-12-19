import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteNames } from "../../constants/routeNames";
import { Login } from "../../screens/Login";
import { NewAccount } from "../../screens/NewAccount";
import { PublicStackParamList } from "../types";

const Stack = createNativeStackNavigator<PublicStackParamList>();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.PUBLIC.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={RouteNames.PUBLIC.LOGIN} component={Login} />
      <Stack.Screen name={RouteNames.PUBLIC.NEW_ACCOUNT} component={NewAccount} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
