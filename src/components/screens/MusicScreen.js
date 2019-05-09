import React, { Component } from "react";
import { Text, View, PermissionsAndroid } from "react-native";

export default class MusicScreen extends Component {
  state = {
    musicData: []
  };

  componentDidMount = () => {
    // PermissionsAndroid.request("android.permission.READ_EXTERNAL_STORAGE").then(
    //   res => {
    //     console.log(res);
    //     this.setState({ musicData: res });
    //   }
    // );

    // // .then(err => console.log(err));
    this.requestExternalStoreageRead();
  };

  async requestExternalStoreageRead() {
    alert("sd");
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "React-Native Music player",
          message: "App needs access to external storage"
        }
      );

      return granted == PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      //Handle this error
      return false;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#333645" }}>
        <View />
      </View>
    );
  }
}
