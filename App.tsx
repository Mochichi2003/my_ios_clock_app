// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React, { Component } from "react";

// import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

// import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

// const Stack = createStackNavigator();
import {
  StyleSheet,
  View,
  Switch,
  Share,
  TouchableOpacity,
} from "react-native";

import Debugsimport from "debug";
const debug = Debugsimport("maketo:buttons");
// import { AppLoading } from "expo";
// import { useDarkMode, DarkModeProvider } from "react-native-dark-mode";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const HomeTab = () => {
  return (
    <View>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
      <Text>
        ホーム画面だよあっっっっっっっっっっっっっっっっっっっっっっっっっっっっっｓ
      </Text>
    </View>
  );
};

const Fotters = () => {
  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.footertabs}>
        <Button
          full
          onPress={() => {
            console.log("ボタンを押したよhome");

            debug("ボタンを押したよhome");
          }}
        >
          <Fontisto name="home" size={24} color="black" />
          <Text style={styles.futter_button_text}>Home</Text>
        </Button>
        <Button
          full
          onPress={() => {
            console.log("ボタンを押したよTimes");
            debug("ボタンを押したよTimes");
          }}
        >
          <Entypo name="back-in-time" size={24} color="black" />
          <Text style={styles.futter_button_text}>Times</Text>
        </Button>
        <Button
          full
          onPress={() => {
            console.log("ボタンを押したよSettings");
            debug("ボタンを押したよSettings");
          }}
        >
          <MaterialIcons name="settings" size={24} color="black" />
          <Text style={styles.futter_button_text}>Settings</Text>
        </Button>
        <Button
          full
          onPress={() => {
            console.log("ボタンを押したよCalendar");
            debug("ボタンを押したよCalendar");
          }}
        >
          <Entypo name="calendar" size={24} color="black" />
          <Text style={styles.futter_button_text}>Calendar</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

// type ClockTypes = { timerID: any };
// const isEnabled = true;

export default class AnatomyExample extends Component {
  render() {
    return (
      <NavigationContainer>
        <Header style={styles.header}>
          <Left>
            {/* <Button transparent> */}
            {/* <Icon name="menu" /> */}
            {/* </Button> */}
          </Left>
          <Body>
            <Title style={{ color: "black" }}>だああ</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Stack.Screen name="Home" component={HomeTab} />
          <Text>おはようございます</Text>

          <TouchableOpacity
            onPress={() => alert("Hello, world!")}
            style={{ backgroundColor: "blue" }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
          </TouchableOpacity>
        </Content>
        <Fotters />
        {/* <Footer>
          <FooterTab>
            <Button full onPress={() => {console.log("ボタンを押したよ")}}>
              <Fontisto name="home" size={24} color="black" />
              <Text style={styles.futter_button_text}>Home</Text>
            </Button>
            <Button full onPress={() => {console.log("ボタンを押したよ")}}>
              <Entypo name="back-in-time" size={24} color="black" />
              <Text style={styles.futter_button_text}>Times</Text>
            </Button>
            <Button full onPress={() => {console.log("ボタンを押したよ")}}>
              <MaterialIcons name="settings" size={24} color="black" />
              <Text style={styles.futter_button_text}>Settings</Text>
            </Button>
            <Button full onPress={() => {console.log("ボタンを押したよ")}}>
              <Entypo name="calendar" size={24} color="black" />
              <Text style={styles.futter_button_text}>Calendar</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  footertabs: {
    backgroundColor: "#eee",
    color: "#000",
  },
  footer: {
    backgroundColor: "#eee",
    color: "#000",
  },
  header: {
    backgroundColor: "#eee",
    color: "#000",
  },
  futter_button_text: {
    color: "#000",
    fontSize: 11,
  },
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
