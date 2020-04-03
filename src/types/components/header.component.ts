import { IconNames } from "./icon.component";
import { ThemeType } from "../settings/theme";

export type HeaderProps = {
  transparent: Boolean;
  title: String;
  placeholder: String;
  leftIconName: IconNames;
  rightIconName: IconNames;
  rightIconName2: IconNames;
  rightIconName3: IconNames;
  onPressRight: () => void;
  onPressRight2: () => void;
  onPressRight3: () => void;
  onPressLeft: () => void;
  onPressX: () => void;
  onPressXAndTextIsEmpty: () => void;
  onChangeText: (text: String) => {};
  onChangeSearchBar: (FilteredData: Array<any>) => {};
  onSubmitSearch: (text: String) => {};
  cleanTextOnSubmit: Boolean;
  searchBar: Boolean;
  data: Array<any>;
  search_PropName_1: String;
  search_PropName_2: String;
  search_PropName_3: String;
  autofocus: Boolean;
  theme: ThemeType;
};

export type HeaderState = {
  SearchText: String;
};
