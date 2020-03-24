import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";
import { StyleSheet} from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return <AppNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
