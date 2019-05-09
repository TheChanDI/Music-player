import React, { Component } from "react";
import { Text, View, Image, Animated, Easing } from "react-native";

let val = 1;
export default class AlbumArt extends Component {
  state = {
    spinDisc: new Animated.Value(0)
  };

  spin = () => {
    let that = this.state;
    this.state.spinDisc.setValue(0);

    if (val == 1) {
      reSpinDisc();

      function reSpinDisc() {
        // alert("enter");
        val = 2;
        Animated.timing(that.spinDisc, {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear
        }).start(() => reSpinDisc());
      }
    } else {
      that.spinDisc.stopAnimation();
      val = 1;
    }

    // if (val == 2) {
    //   Animated.timing(this.state.spinDisc, {
    //     toValue: 1,
    //     duration: 4000,
    //     easing: Easing.linear
    //   }).start(() => {
    //     reSpinDisc();
    //   });
    // } else {
    //   this.state.spinDisc.stopAnimation();
  };

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
          source={require("../../assets/musicDisc.png")}
          style={{ height: 250, width: 250, transform: [{ rotate: spin }] }}
        />
        <View style={{ position: "absolute", paddingLeft: "40%", top: -15 }}>
          <Image
            source={require("../../assets/musicStick.png")}
            style={{
              height: 100,
              width: 300
            }}
          />
        </View>
      </View>
    );
  }
}
