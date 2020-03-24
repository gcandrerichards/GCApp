import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { Text, Button } from "native-base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Welcome = props => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/gclogo.png")} />
        </View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>TELEHEALTH</Text>
        </View>
        <Text style={styles.headerText}>
          Delivering tele-ophthalmology in all 50 states
        </Text>
        <Button
          style={styles.button}
          onPress={() => props.navigation.navigate("Appointment")}
        >
          <Text>Request an Appointment</Text>
        </Button>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  mainContent: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.25
  },
  logoContainer: {
    // padding: 20,
    marginLeft: windowHeight * 0.02
  },
  logo: {
    margin: 10
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
    fontSize: windowWidth * 0.09,
    fontWeight: "200",
    textAlign: "center"
  },
  headerText: {
    fontSize: windowWidth * 0.07,
    fontWeight: "200",
    textAlign: "center"
  },
  button: {
    marginTop: 32
  }
});
