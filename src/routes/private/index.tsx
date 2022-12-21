import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteNames } from "../../constants/routeNames";
import { Home } from "../../screens/Home";
import { NewTaskModal } from "../../screens/NewTaskModal";
import { SettingsModal } from "../../screens/SettingsModal";
import { PrivateStackParamList } from "../types";

const Stack = createNativeStackNavigator<PrivateStackParamList>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.PRIVATE.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={RouteNames.PRIVATE.HOME} component={Home} />
      <Stack.Screen
        name={RouteNames.PRIVATE.NEW_TASK_MODAL}
        component={NewTaskModal}
        options={{
          presentation: "formSheet",
        }}
      />
      <Stack.Screen
        name={RouteNames.PRIVATE.SETTINGS_MODAL}
        component={SettingsModal}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
