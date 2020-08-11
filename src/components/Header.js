import React, { Component } from "react";
import Icon from "./Icon";
import { HeaderProps, HeaderState } from "../types/components/header.component";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import { FilterData, Validate } from "../utils/functions";

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

  render() {
    const {
      leftIcons,
      rightIcons,
      title,
      searchBar,
      placeholder,
      data,
      searchPropNames,
      onChangeSearchBar,
      onChangeText,
      onSubmitSearch,
      cleanTextOnSubmit,
      theme,
      autoCapitalize,
      autoCorrect,
      autoFocus,
      titleAlign
    } = this.props;
    const { SearchText } = this.state;
    return (
      <SafeAreaView style={[Styles.container, theme && {backgroundColor: theme.Background}]}>
        {Validate(leftIcons) && leftIcons?.length > 0 ? (
          <View style={Styles.Left}>
            {leftIcons.map((icon, index) => {
              return (
                <Icon
                  key={`key-${icon.name}-${index}`}
                  color={theme && theme.Primary}
                  {...icon}
                />
              );
            })}
          </View>
        ) : null}
        <View style={[Styles.Body, {alignItems: titleAlign}]}>
          {searchBar && searchBar ? (
            <TextInput
              placeholder={placeholder ? placeholder : "Search"}
              style={[Styles.SearchInput, theme && {color: theme.TextColor}]}
              value={SearchText}
              autoFocus={autoFocus}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              placeholderTextColor={theme && theme?.Secondary}
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
                  onChangeSearchBar(FilterData(data, text, searchPropNames));
              }}
            />
          ) : (
            <Text style={[Styles.TitleStyle, theme && {color: theme.TextColor}]}>{title}</Text>
          )}
        </View>
        {(Validate(rightIcons) && rightIcons?.length > 0) || searchBar  ? (
          <View style={Styles.Right}>
            {!searchBar ? (
              rightIcons.map((icon, index) => {
                return (
                  <Icon
                    key={`key-${icon.name}-${index}`}
                    color={theme && theme.Primary}
                    {...icon}
                  />
                );
              })
            ) : (
              <Icon
                name={"close"}
                onPress={this.onPressX}
                style={[Styles.SearchIcon1]}
                color={theme && theme.Primary}
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
    marginVertical: 10,
  },
  IconColor: {
    color: "blue",
  },
  SearchInput: {
    width: "100%",
    paddingHorizontal: 10
  },
  Left: {
    flex: 0,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  Body: { flex: 1, justifyContent: "center", alignItems: 'center' },
  Right: {
    flex: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  center: { alignItems: "center" },
  row: { flexDirection: "row" },
  TitleStyle: {
    color: "black",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "800",
    textAlign : 'left',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: 56,
  },
});

export default HeaderComponent;
