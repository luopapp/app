import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import ConfigProvider from "./contexts/config";
import Routes from "./routes";

function App() {
  return (
    <NavigationContainer>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </NavigationContainer>
  );
}

export default App;
