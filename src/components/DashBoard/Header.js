import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#C75E65"
  }
});

export default Header;
