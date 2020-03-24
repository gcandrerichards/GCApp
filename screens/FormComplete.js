import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button, Form, Input, Item } from "native-base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FormComplete = props => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>THANK YOU</Text>
        </View>
        <Text style={styles.headerText}>Thank You for Registering!</Text>
      </View>
    </View>
  );
};

export default FormComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 0
    // alignItems: "center"
  },
  mainContent: {
    height: windowHeight,
    // justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.25
  },
  banner: {
    backgroundColor: "rgb(25, 107, 250)",
    width: windowWidth,
    height: windowHeight * 0.125,
    marginVertical: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  bannerText: {
    color: "#fff",
    fontSize: windowWidth * 0.1,
    fontWeight: "200",
    textAlign: "center"
  },
  headerText: {
    fontSize: windowWidth * 0.07,
    fontWeight: "200",
    textAlign: "center"
  },
});
