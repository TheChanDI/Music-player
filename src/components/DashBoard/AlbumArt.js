import React, { Component } from "react";
import { Text, View, Image, Animated, Easing } from "react-native";

export default class AlbumArt extends Component {
  state = {
    spinDisc: new Animated.Value(0)
  };

  componentDidMount = () => {
    this.spin();
  };

  spin() {
    this.state.spinDisc.setValue(0);
    Animated.timing(this.state.spinDisc, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const spin = this.state.spinDisc.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15
        }}
      >
        <Animated.Image
          source={require("../../assets/musicplayer.png")}
          style={{ height: 250, width: 250, transform: [{ rotate: spin }] }}
        />
      </View>
    );
  }
}
