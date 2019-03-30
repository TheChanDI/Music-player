import React, { Component } from "react";
import { Text, View, TouchableOpacity, Slider } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FIcon from "react-native-vector-icons/Foundation";

export default class Controls extends Component {
  state = {
    buttonPressed: true
  };
  render() {
    return (
      <View
        style={{
          marginTop: 20
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Slider minimumTrackTintColor="red" maximumTrackTintColor="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 15
          }}
        >
          <TouchableOpacity style={{ marginTop: "5%" }}>
            <FIcon name="previous" size={60} color="white" />
          </TouchableOpacity>

          {this.state.buttonPressed ? (
            <TouchableOpacity
              onPress={() => this.setState({ buttonPressed: false })}
            >
              <Icon name="play-circle" size={100} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.setState({ buttonPressed: true })}
            >
              <Icon name="pause-circle" size={100} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={{ marginTop: "5%" }}>
            <FIcon name="next" size={60} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
