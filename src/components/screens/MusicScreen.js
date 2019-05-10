import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import MusicFiles from "react-native-get-music-files";

export default class MusicScreen extends Component {
  state = {
    musicData: []
  };

  componentDidMount = () => {
    MusicFiles.getAll({
      blured: true, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      cover: true, //default : true,
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000 // get songs bigger than 10000 miliseconds duration,
    })
      .then(tracks => {
        console.log(tracks);
        this.setState({
          musicData: tracks
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showSongs = item => {
    const { fileName } = item;
    return (
      <View style={{ marginTop: "5%", marginHorizontal: "3%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "OpenSans-Regular"
          }}
        >
          {fileName}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#333645" }}>
        <View style={{ height: 50, backgroundColor: "#C75E65" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "OpenSans-Bold",
              color: "#F7E1B8"
            }}
          >
            Songs
          </Text>
        </View>
        <FlatList
          data={this.state.musicData}
          renderItem={({ item }) => this.showSongs(item)}
        />
      </View>
    );
  }
}
