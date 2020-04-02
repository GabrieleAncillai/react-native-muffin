import React, { Component } from "react";
import { View, Text } from "react-native";

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text> test </Text>
      </View>
    );
  }
}
