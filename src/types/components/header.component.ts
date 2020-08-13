import { IconProps } from "./icon.component";
import { ThemeType } from "../settings/theme";
import { TextInputProps, FlexStyle } from "react-native";

export type HeaderProps = {
  title: String;
  placeholder?: String;
  transparent?: Boolean;
  leftIcons?: Array<IconProps>;
  rightIcons?: Array<IconProps>;
  onPressX?: () => void;
  onPressXAndTextIsEmpty?: () => void;
  onChangeText?: (text: String) => {};
  onChangeSearchBar?: (FilteredData: Array<any>) => {};
  onSubmitSearch?: (text: String) => {};
  cleanTextOnSubmit?: Boolean;
  searchBar?: Boolean;
  data?: Array<any>;
  searchPropNames?: Array<String>;
  autoFocus?: TextInputProps["autoFocus"];
  autoCorrect?: TextInputProps["autoCorrect"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  titleAlign: FlexStyle["alignItems"];
  theme?: ThemeType;
};

export type HeaderState = {
  SearchText: String;
};
