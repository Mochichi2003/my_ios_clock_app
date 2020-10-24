import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import { StyleSheet, Text, View, Button, Linking } from "react-native";
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

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      // Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const OpenSettingsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

class MymainComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        {/* <TextInput style={styles.textinputForm} defaultValue="Name me!" /> */}

        {/* <Text>只今の時間</Text> */}
        {/* <Text style={styles.times}>{dayjs().format("YYYY/MM/DD hh:mm:ss")}</Text> */}
        {/* <Textinput /> */}
        <Clock />
        <OpenURLButton url="https://twitter.com/home">
          url開くんだよ
        </OpenURLButton>
        <OpenSettingsButton>設定を開くんだよ</OpenSettingsButton>
      </View>
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="えへへへのへ"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <MymainComponent />
    </>
  );
};
const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
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
