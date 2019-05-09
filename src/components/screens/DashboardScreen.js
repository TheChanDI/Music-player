import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../DashBoard/Header";
import AlbumArt from "../DashBoard/AlbumArt";
import SongInfo from "../DashBoard/SongInfo";
import Controls from "../DashBoard/Controls";

export default class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#333645" }}>
        <StatusBar backgroundColor="#C75E65" />
        <Header navigation={this.props.navigation} />
        <AlbumArt />
        <SongInfo />
        <Controls />
      </View>
    );
  }
}
