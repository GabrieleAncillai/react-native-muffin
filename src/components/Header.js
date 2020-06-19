import React, { Component } from "react";
import Icon from "./Icon";
import { HeaderProps, HeaderState } from "../types/components/header.component";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import { FilterData } from "../utils/functions";

/**
 * @extends {Component<HeaderProps, HeaderState>}
 */
class HeaderComponent extends Component {
  state = {
    SearchText: "",
  };

  onPressX = () => {
    const { SearchText } = this.state;
    const { onPressX, onPressXAndTextIsEmpty } = this.props;
    if (SearchText) {
      this.setState({ SearchText: "" });
      if (onPressX) {
        onPressX();
      }
    } else if (onPressXAndTextIsEmpty) {
      onPressXAndTextIsEmpty();
    }
  };

  getRightStyle = () => {
    const { searchBar, rightIconName2, rightIconName3 } = this.props;
    let sty = {};
    if (searchBar || !rightIconName2) {
      sty = { flex: 0.2 };
    } else if (!rightIconName3) {
      sty = { flex: 0.28 };
    }
    return sty;
  };

  render() {
    const {
      leftIconName,
      rightIconName,
      rightIconName2,
      rightIconName3,
      onPressLeft,
      onPressRight,
      onPressRight2,
      onPressRight3,
      title,
      searchBar,
      placeholder,
      data,
      search_PropName_1,
      search_PropName_2,
      search_PropName_3,
      onChangeSearchBar,
      onChangeText,
      autofocus,
      onSubmitSearch,
      cleanTextOnSubmit,
    } = this.props;
    const { SearchText } = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        {leftIconName && (
          <View style={Styles.Left}>
            <Icon
              name={leftIconName}
              onPress={onPressLeft}
              style={Styles.LeftIcon}
            />
          </View>
        )}
        <View style={[Styles.Body, searchBar && { flex: 0.8 }]}>
          {searchBar && searchBar ? (
            <TextInput
              autoFocus={autofocus}
              placeholder={placeholder ? placeholder : "Search"}
              style={Styles.SearchInput}
              value={SearchText}
              // { - - NEW - - -
              //autoCorrect={false}
              //autoCapitalize="none"
              //placeholderTextColor={themedStyle.SearchInput.color}
              // - - - NEW - - }
              onSubmitEditing={() => {
                onSubmitSearch && onSubmitSearch(SearchText);
                cleanTextOnSubmit && this.setState({ SearchText: "" });
              }}
              onChangeText={(text) => {
                this.setState({ SearchText: text });
                onChangeText && onChangeText(text);
                onChangeSearchBar &&
                  data &&
                  data.length > 0 &&
                  onChangeSearchBar(
                    FilterData(
                      data,
                      text,
                      search_PropName_1,
                      search_PropName_2,
                      search_PropName_3
                    )
                  );
              }}
            />
          ) : (
            <Text style={Styles.TitleStyle}>{title}</Text>
          )}
        </View>
        {rightIconName || rightIconName2 || rightIconName3 ? (
          <View style={[Styles.Right, this.getRightStyle()]}>
            {!searchBar ? (
              <View style={Styles.row}>
                {rightIconName3 ? (
                  <Icon
                    name={rightIconName3}
                    onPress={onPressRight3}
                    style={Styles.SearchIcon1}
                  />
                ) : null}
                {rightIconName2 ? (
                  <Icon
                    name={rightIconName2}
                    onPress={onPressRight2}
                    style={Styles.SearchIcon1}
                  />
                ) : null}
              </View>
            ) : null}
            {rightIconName ? (
              <Icon
                name={searchBar ? "close" : rightIconName}
                onPress={searchBar ? () => this.onPressX() : onPressRight}
                style={Styles.SearchIcon1}
              />
            ) : null}
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  LeftIcon: {},
  SearchIcon1: {
    marginVertical: 10,
  },
  IconColor: {
    color: "blue",
  },
  SearchInput: {
    width: "100%",
    maxHeight: 40,
  },
  Left: { flex: 0.2, justifyContent: "center", alignItems: "flex-start" },
  Body: { flex: 1, padding: 8, paddingLeft: 18, justifyContent: "center" },
  Right: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 6,
  },
  center: { alignItems: "center" },
  row: { flexDirection: "row" },
  TitleStyle: {
    color: "black",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "800",
    textAlign: "left",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: 56,
  },
});

export default HeaderComponent;
