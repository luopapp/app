import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CameraScreen from "./screens/Camera";
import GalleryScreen from "./screens/Gallery";
import PermissionScreen from "./screens/Permission";

export type StackParamList = {
  permission: undefined;
  camera: undefined;
  gallery: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="permission"
          component={PermissionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="gallery"
          component={GalleryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
