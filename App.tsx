import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View, Button } from "react-native";
// import { AppLoading } from "expo";
// import { useDarkMode, DarkModeProvider } from "react-native-dark-mode";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

type ClockTypes = { timerID: any };

class Clock extends React.Component<ClockTypes> {
  timerID: any;
  nowtime: string & number;
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
        <Button
          onPress={() => {
            console.log("てすと" + dayjs().format("YYYY/MM/DD hh:mm:ss:SSS"));
            alert("わあああああああ");
          }}
          title="こんにちは"
          color="#0092ca"
          accessibilityLabel="Learn more about this purple button"
          // style={styles.button}
        />

        <Text style={styles.times}>{this.state.nowtime}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar />
        {/* <TextInput style={styles.textinputForm} defaultValue="Name me!" /> */}

        {/* <Text>只今の時間</Text> */}
        {/* <Text style={styles.times}>{dayjs().format("YYYY/MM/DD hh:mm:ss")}</Text> */}
        {/* <Textinput /> */}
        <Clock />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f00",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinputForm: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    // backgroundColor: "powderblue",
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    // width: "100%",
    // margin: 10,
  },
  times: {
    fontSize: 32,
    fontWeight: "800",
    // fontFamily: ,
  },
});
