import React from "react";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import DashboardScreen from "./src/components/screens/DashboardScreen";
import LyricScreen from "./src/components/screens/LyricsScreen";
import SettingScreen from "./src/components/screens/SettingScreen";

const botTabNav = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="music" size={26} color={tintColor} />
        )
      }
    },
    Lyric: {
      screen: LyricScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="file-alt" size={26} color={tintColor} />
        )
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="tools" size={26} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",

    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#82587C",
      inactiveTintColor: "grey",
      indicatorStyle: {
        backgroundColor: "#F7E1B8"
      },
      style: {
        backgroundColor: "#F7E1B8",
        height: 60
      }
    }
  }
);

export default createAppContainer(botTabNav);
