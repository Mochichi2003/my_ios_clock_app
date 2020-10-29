import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React, { Component } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import * as Font from "expo-font";

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

const Stack = createStackNavigator();
import { StyleSheet, View } from "react-native";
// import { AppLoading } from "expo";
// import { useDarkMode, DarkModeProvider } from "react-native-dark-mode";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

// type ClockTypes = { timerID: any };
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            {/* <Button transparent> */}
            {/* <Icon name="menu" /> */}
            {/* </Button> */}
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>{/* ここにメインコンテンツを書く */}</Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Fontisto name="home" size={24} color="black" />
              <Text style={styles.futter_button_text}>Home</Text>
            </Button>
            <Button full>
              <Entypo name="back-in-time" size={24} color="black" />
              <Text style={styles.futter_button_text}>Times</Text>
            </Button>
            <Button full>
              <MaterialIcons name="settings" size={24} color="black" />
              <Text style={styles.futter_button_text}>Settings</Text>
            </Button>
            <Button full>
              <Entypo name="calendar" size={24} color="black" />
              <Text style={styles.futter_button_text}>Calendar</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e4f1fe",
  },
  futter_button_text: {
    fontSize: 14,
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
