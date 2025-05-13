import React from "react";
import { Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EventButton />
      <EventInput />
    </View>
  );
};

export default App;
