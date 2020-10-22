import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { AppLoading } from "expo";
import { useDarkMode, DarkModeProvider } from "react-native-dark-mode";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

// const isDarkMode = useDarkMode()
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

  chengetext() {}
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            console.log("てすと" + dayjs().format("YYYY/MM/DD hh:mm:ss:SSS"));
          }}
          title="Learn More"
          color="#0092ca"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={styles.times}>{this.state.nowtime}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TextInput style={styles.textinputForm} />
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
  textinputForm: {
    backgroundColor: "powderblue",

    width: "100%",
    margin: 10,
  },
  times: {
    fontSize: 32,
    fontWeight: "800",
    // fontFamily: ,
  },
});
