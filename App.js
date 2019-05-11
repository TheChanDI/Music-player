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
import ArtistScreen from "./src/components/screens/ArtistScreen";
import AlbumScreen from "./src/components/screens/AlbumScreen";

const MusicTabScreen = createMaterialTopTabNavigator(
  {
    localMusic: {
      screen: MusicScreen,
      title: "Local songs"
    },
    Artist: {
      screen: ArtistScreen,
      title: "Artist"
    },
    Albums: {
      screen: AlbumScreen,
      title: "Albums"
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "white",
      indicatorStyle: {
        backgroundColor: "#F7E1B8"
      },
      style: {
        backgroundColor: "#C75E65",
        height: 50
      }
    }
  }
);

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null
    }
  },
  Music: {
    screen: MusicTabScreen,
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
    swipeEnabled: false,
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
