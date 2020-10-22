import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from 'expo';

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

class Clock extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { nowtime: this.nowtimeis() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      nowtime: this.nowtimeis(),
    });
  }
  nowtimeis() {
    return dayjs().format("YYYY/MM/DD hh:mm:ss");
  }

  render() {
    return (
      <View>
        <Text style={styles.times}>{this.state.nowtime}</Text>
      </View>
    );
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      {/* <Text>只今の時間</Text> */}
      {/* <Text style={styles.times}>{dayjs().format("YYYY/MM/DD hh:mm:ss")}</Text> */}
      {/* <Textinput /> */}
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  times: {
    fontSize: 32,
    fontWeight: "800",
    // fontFamily: "Cochin",
  },
});
