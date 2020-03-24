import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button, Form, Input, Item } from "native-base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Appointment = props => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>REGISTER</Text>
        </View>
        <Form style={styles.formContainer}>
          <View style={styles.formContent}>
            <Item fixedLabel>
              <Input placeholder="Name" />
            </Item>
            <Item fixedLabel>
              <Input placeholder="Phone Number" />
            </Item>
          </View>
          <Button
            style={styles.button}
            onPress={() => props.navigation.navigate("FormComplete")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Button>
        </Form>
      </View>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    // justifyContent: "center",
    alignItems: "center"
  },
  mainContent: {
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
  formContainer: {
    width: windowWidth * 1,
    padding: 20
  },
  formContent: {
    marginRight: 15
  },
  headerText: {
    fontSize: windowWidth * 0.075,
    fontWeight: "600",
    textAlign: "center"
  },
  button: {
    marginTop: 32,
    justifyContent: "center",
    marginHorizontal: 15
  },
  buttonText: {
    textAlign: "center"
  }
});
