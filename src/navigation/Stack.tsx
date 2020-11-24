import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import Beranda from "../screens/Beranda";

import i18n from "../I18n";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Login"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Login" component={Login} options={{ header: () => null }} />
    <Screen
      name="Beranda"
      component={Beranda}
      options={{ header: () => null }}
    />
    <Screen name="Home" component={Home} options={{ header: () => null }} />
    <Screen
      name="Setting"
      component={Setting}
      options={{ title: i18n.t("setting") }}
    />
  </Navigator>
);

export default Stack;
