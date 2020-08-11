import {
  StyleProp,
  ViewStyle,
  ImageProps,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { OriginalIconNames } from "../../packs/Original/types";
import { InterfaceIconNames } from "../../packs/Interface/types";

export type IconProps = {
  color?: String | "blue";
  name?: IconNames | "person";
  size?: Number | 25;
  onPress?: () => void;
  family?: IconFamilies | "Original";
  style?: TouchableWithoutFeedbackProps["style"];
  iconStyle?: ImageProps["style"];
};

export type IconState = {};

export type IconFamilies = "Original" | "Interface" | "Creative";

export type IconNames = OriginalIconNames & InterfaceIconNames;
