import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import EIcon from "react-native-vector-icons/Entypo";

export default class SongInfo extends Component {
  componentDidMount() {
    console.log("songInfo mounted!");
  }

  componentWillUnmount() {
    console.log("songInfo unmounted!");
  }

  render() {
    return (
      <View
        style={{
          marginTop: 30,
          borderTopColor: "#666666",
          borderTopWidth: 1,
          paddingVertical: 15,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <TouchableOpacity>
          <EIcon
            name="plus"
            color="white"
            size={20}
            style={{ marginTop: "2%" }}
          />
        </TouchableOpacity>

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

        <TouchableOpacity>
          <EIcon
            name="dots-three-horizontal"
            color="white"
            size={20}
            style={{ marginTop: "2%" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
