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
    } = this.props;
    const { SearchText } = this.state;
    return (
      <SafeAreaView style={Styles.container}>
        {Validate(leftIcons) && leftIcons?.length > 0 ? (
          <View style={Styles.Left}>
            {leftIcons.map((icon, index) => {
              return (
                <Icon
                  key={`key-${icon.name}-${index}`}
                  name={icon.name}
                  onPress={icon.onPress}
                  iconStyle={
                    icon.style ? icon.style : { tintColor: theme.Primary }
                  }
                />
              );
            })}
          </View>
        ) : null}

        <View style={[Styles.Body, searchBar && { flex: 0.8 }]}>
          {searchBar && searchBar ? (
            <TextInput
              placeholder={placeholder ? placeholder : "Search"}
              style={Styles.SearchInput}
              value={SearchText}
              autoFocus={autoFocus}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              placeholderTextColor={theme?.Primary}
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
            <Text style={Styles.TitleStyle}>{title}</Text>
          )}
        </View>
        {Validite(rightIcons) && rightIcons?.length > 0 ? (
          <View style={Styles.Right}>
            {!searchBar ? (
              rightIcons.map((icon, index) => {
                return (
                  <Icon
                    key={`key-${icon.name}-${index}`}
                    name={icon.name}
                    onPress={icon.onPress}
                    iconStyle={
                      icon.style ? icon.style : { tintColor: theme.Primary }
                    }
                  />
                );
              })
            ) : (
              <Icon
                name={"close"}
                onPress={this.onPressX}
                style={[Styles.SearchIcon1, { tintColor: theme.Primary }]}
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
