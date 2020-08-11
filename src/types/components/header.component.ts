import { IconNames, IconFamilies } from "./icon.component";
import { ThemeType } from "../settings/theme";
import { TextInputProps } from "react-native";

export type HeaderProps = {
  title: String;
  placeholder?: String;
  transparent?: Boolean;
  leftIcons?: Array<IconHandlerType>;
  rightIcons?: Array<IconHandlerType>;
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
  theme?: ThemeType;
};

export type HeaderState = {
  SearchText: String;
};

type IconHandlerType = {
  name: IconNames;
  family?: IconFamilies;
  onPress?: () => any;
  style?: Object;
};
