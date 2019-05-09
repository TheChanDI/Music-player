import React from "react";
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import DashboardScreen from "./src/components/screens/DashboardScreen";
import LyricScreen from "./src/components/screens/LyricScreen";
import MusicScreen from "./src/components/screens/MusicScreen";

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null
    }
  },
  Music: {
    screen: MusicScreen,
    navigationOptions: {
      header: null
    }
  }
});

const botTabNav = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
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
