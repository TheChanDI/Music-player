import React, { Component } from "react";
import { Text, View } from "react-native";

export default class SongInfo extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 30,
          borderTopColor: "white",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderBottomColor: "white",
          paddingVertical: 10
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              fontSize: 20,
              color: "white"
            }}
          >
            Iron Maiden
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Light",
              fontSize: 15,
              color: "white"
            }}
          >
            Fear of the dark
          </Text>
        </View>
      </View>
    );
  }
}
