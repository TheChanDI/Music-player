import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <Text
        style={{
          fontFamily: "LuckiestGuy-Regular",
          fontSize: 30,
          color: "#F7E1B8"
        }}
      >
        Music Player
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          marginRight: "2%",
          marginBottom: "1%"
        }}
      >
        <Icon
          name="library-music"
          size={27}
          color="#333645"
          onPress={() => props.navigation.navigate("Music")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#C75E65",
    flexDirection: "row"
  }
});

export default Header;
