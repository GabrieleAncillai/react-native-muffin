import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from "../utils/constants";
import { IconProps } from "../types/components/icon.component";

/**
 * @extends {Component<IconProps>}
 */
class Icon extends Component {
  render() {
    const {
      name = "person",
      size,
      color = "blue",
      onPress,
      style,
      family = "Original",
      iconStyle,
    } = this.props;
    const FinalSize = size ? size : 25;
    const TOPlus = 18 + FinalSize;
    return (
      <TouchableOpacity
        onPress={onPress && onPress}
        style={[{ height: TOPlus, width: TOPlus, ...Styles.IconStyle }, style]}
        disabled={!onPress}
      >
        <Image
          source={Icons[family][name]}
          style={[
            Styles.IconStyle,
            { height: FinalSize, width: FinalSize, tintColor: color },
            iconStyle,
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const Styles = StyleSheet.create({
  IconStyle: { justifyContent: "center", alignItems: "center" },
});

export default Icon;
