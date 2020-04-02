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
    SearchText: ""
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
      cleanTextOnSubmit
    } = this.props;
    const { SearchText } = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        {leftIconName && (
          <View style={Styles.Left}>
            <Icon
              Name={leftIconName}
              onPress={onPressLeft}
              Style={Styles.LeftIcon}
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
              onSubmitEditing={() => {
                onSubmitSearch && onSubmitSearch(SearchText);
                cleanTextOnSubmit && this.setState({ SearchText: "" });
              }}
              onChangeText={text => {
                this.setState({ SearchText: text });
                onChangeText && onChangeText(text);
                onChangeSearchBar &&
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
          //eslint-disable-next-line react-native/no-inline-styles
          <View style={[Styles.Right, searchBar && { flex: 0.2 }]}>
            {!searchBar && (
              <View style={Styles.row}>
                {rightIconName3 && (
                  <Icon
                    Name={rightIconName3}
                    onPress={onPressRight3}
                    Style={Styles.SearchIcon1}
                  />
                )}
                {rightIconName2 && (
                  <Icon
                    Name={rightIconName2}
                    onPress={onPressRight2}
                    Style={Styles.SearchIcon1}
                  />
                )}
              </View>
            )}
            {rightIconName && (
              <Icon
                Name={searchBar ? "close" : rightIconName}
                onPress={searchBar ? () => this.onPressX() : onPressRight}
                Style={Styles.SearchIcon1}
              />
            )}
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  LeftIcon: {},
  SearchIcon1: {
    marginVertical: 10
  },
  IconColor: {
    color: "blue"
  },
  SearchInput: {
    width: "100%",
    height: 50
  },
  Left: { flex: 0.2, justifyContent: "center", alignItems: "flex-start" },
  Body: { flex: 1, padding: 8, justifyContent: "center" },
  Right: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 6
  },
  center: { alignItems: "center" },
  row: { flexDirection: "row" },
  TitleStyle: {
    color: "blue",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "left"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "grey",
    elevation: 4,
    minHeight: 56
  }
});

export default HeaderComponent;
