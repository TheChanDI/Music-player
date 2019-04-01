import React, { Component } from "react";
import { Text, View, TouchableOpacity, Slider, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FIcon from "react-native-vector-icons/Foundation";
import FeatherIcon from "react-native-vector-icons/Feather";
import AlbumArt from "./AlbumArt";

export default class Controls extends Component {
  constructor(props) {
    super(props);
    Obj = new AlbumArt();
  }

  state = {
    buttonPressed: true,
    repeatPressed: false,
    shufflePressed: false
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
          <TouchableOpacity
            style={{ marginTop: "8%" }}
            onPress={() => {
              if (this.state.shufflePressed == true) {
                this.setState({ shufflePressed: false });
              } else {
                this.setState({ shufflePressed: true });
              }
            }}
          >
            <FIcon
              name="shuffle"
              size={20}
              style={Object.assign(
                this.state.shufflePressed ? styles.repeat : styles.repeatOff
              )}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: "5%" }}>
            <FIcon name="previous" size={40} color="white" />
          </TouchableOpacity>

          {this.state.buttonPressed ? (
            <TouchableOpacity
              onPress={() => {
                Obj.spin();
                this.setState({ buttonPressed: false });
              }}
            >
              <Icon name="play-circle" size={80} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.setState({ buttonPressed: true })}
            >
              <Icon name="pause-circle" size={80} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={{ marginTop: "5%" }}>
            <FIcon name="next" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: "8%" }}
            onPress={() => {
              if (this.state.repeatPressed == true) {
                this.setState({ repeatPressed: false });
              } else {
                this.setState({ repeatPressed: true });
              }
            }}
          >
            <FeatherIcon
              name="repeat"
              size={20}
              style={Object.assign(
                this.state.repeatPressed ? styles.repeat : styles.repeatOff
              )}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  repeat: {
    color: "white"
  },
  repeatOff: {
    color: "#8c8c8c"
  }
});
