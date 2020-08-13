# react-native-muffin

<!--- # !!! WARNING !!!

This package is still in development, so most of its content has bugs, i do NOT recommend using this early versions for important apps, use it at your own risk. --->

## Installation

Using npm:

```bash
npm install react-native-muffin --save
```

Using yarn:

```bash
yarn add react-native-muffin
```

# Components

### Icon

#### _Props_:

| Name      | Type       | Requires | Description                                                                           |
| --------- | ---------- | -------- | ------------------------------------------------------------------------------------- |
| name      | String     | -        | Name of the icon is going to be rendered, default is 'person'                         |
| size      | Number     | -        | Size of the icon, default value is 25                                                 |
| color     | String     | -        | Color of the icon, default is 'blue'                                                  |
| onPress   | Function   | -        | Function to execute when pressing the icon                                            |
| style     | ViewStyle  | -        | Optional Style for the outer TouchableOpacity                                         |
| iconStyle | ImageStyle | -        | Optional style to apply on Image component, (has higher priority than color and size) |

#### _Usage_:

```js
import { Icon } from "react-native-muffin";

class SomeComponent extends Component {
  render() {
    return (
      <Icon
        name={"bell"}
        size={20}
        color={"grey"}
        onPress={() => console.log("Icon Pressed!")}
      />
    );
  }
}
```

#### _Families_:

##### - Interface: https://www.flaticon.es/packs/interface-icon-collection

<!-- ##### - Universal: https://www.flaticon.es/packs/universal-interface -->

### Dialog

#### _Props_:

| Name                      | Type                   | Requires | Description                                                                                                                                                      |
| ------------------------- | ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible                   | Boolean                | -        | [The visible prop determines whether your dialog is visible.](https://reactnative.dev/docs/modal#visible)                                                        |
| title                     | String                 | -        | The title prop provides a Text Component in the dialog where displays the prop                                                                                   |
| titleStyle                | TextStyle              | -        | Sets the style of the title Text Component                                                                                                                       |
| message                   | String                 | -        | The message prop provides a Text Component in the dialog where displays the prop, it's like a subtitle for the dialog                                            |
| messageStyle              | TextStyle              | -        | Sets the style of the message Text Component                                                                                                                     |
| buttons                   | Array<React.Component> | -        | [The buttons prop is an array where you can render various React Components](https://www.npmjs.com/package/react-native-simple-dialogs)                          |
| buttonsStyle              | ViewStyle              | -        | Sets the style of the main external View Component where buttons are rendered                                                                                    |
| dialogStyle               | ViewStyle              | -        | Sets the style of the main internal View Component                                                                                                               |
| overlayStyle              | ViewStyle              | -        | Sets the style of the main external View Component                                                                                                               |
| contentStyle              | ViewStyle              | -        | Sets the style of the external Children Component                                                                                                                |
| animationType             | String                 | -        | [The animationType prop controls how the dialog animates.](https://reactnative.dev/docs/modal#animationtype)                                                     |
| onDismiss                 | Function               | -        | [The onDismiss prop allows passing a function that will be called once the dialog has been dismissed.](https://reactnative.dev/docs/modal#ondismiss)             |
| onShow                    | Function               | -        | [The onShow prop allows passing a function that will be called once the dialog has been shown.](https://reactnative.dev/docs/modal#onshow)                       |
| onRequestClose            | Function               | -        | [The onRequestClose callback is called when the user taps the hardware back button on Android.](https://reactnative.dev/docs/modal#onrequestclose)               |
| onTouchOutside            | Function               | -        | [The onTouchOutside callback is called when the user taps outside the dialog's area](https://www.npmjs.com/package/react-native-simple-dialogs)                  |
| onOrientationChange       | Function               | -        | [The supportedOrientations prop allows the dialog to be rotated to any of the specified orientations.](https://reactnative.dev/docs/modal#supportedorientations) |
| supportedOrientations     | String                 | -        | [Determines when the keyboard should stay visible after a tap](https://reactnative.dev/docs/scrollview#keyboardshouldpersisttaps)                                |
| keyboardShouldPersistTaps | String                 | -        | [Determines when the keyboard should stay visible after a tap](https://reactnative.dev/docs/scrollview#keyboardshouldpersisttaps)                                |
| keyboardDismissMode       | String                 | -        | [Determines whether the keyboard gets dismissed in response to a drag.](https://reactnative.dev/docs/scrollview#keyboarddismissmode)                             |

#### _Usage_:

```js
import { Dialog } from "react-native-muffin";

class SomeComponent extends Component {
  render() {
    return (
      <Dialog
        visible
        title={"Hello"}
        message={"World!"}
        buttons={[() => <Button>{"Ok"}</Button>]}
      />
    );
  }
}
```

### Header

#### _Props_:

| Name              | Type               | Requires                    | Description                                                                                                                                                                                                                                                           |
| ----------------- | ------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title             | String             | -                           | Title that header is going to show                                                                                                                                                                                                                                    |
| rightIcons        | Array(IconObjects) | -                           | Name of the icon to show on the right side                                                                                                                                                                                                                            |
| leftIcons         | Array(IconObjects) | -                           | Name of the icon to show on the left side                                                                                                                                                                                                                             |
| searchBar         | Boolean            | -                           | Indicates to the Header component when it has to render in SearchBar mode                                                                                                                                                                                             |
| placeholder       | String             | -                           | Placeholder of the TextInput rendered in SearchBar mode                                                                                                                                                                                                               |
| autoFocus         | Boolean            | -                           | [It represents the autofocus prop of the TextInput rendered in SearchBar mode](https://reactnative.dev/docs/textinput#autofocus)                                                                                                                                      |
| autoCorrect       | Boolean            | -                           | [If false, disables auto-correct. The default value is true](https://reactnative.dev/docs/textinput#autocorrect)                                                                                                                                                      |
| autoCapitalize    | String             | -                           | [Can tell TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad](https://reactnative.dev/docs/textinput#autocapitalize)                                                              |
| titleAlign        | String             | -                           | [describes how to align children along the cross axis of their container. Align items is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis](https://reactnative.dev/docs/flexbox#align-items)             |
| onChangeText      | Function           | **searchBar**               | Function executed when TextInput rendered in SearchBar mode changes its content, as normal, it returns the text from input: (text) => {}                                                                                                                              |
| onSubmitSearch    | Function           | **searchBar**               | Function executed when Enter Key is pressed on TextInput rendered in SearchBar mode                                                                                                                                                                                   |
| cleanTextOnSubmit | Boolean            | **searchBar**               | Indicates if TextInput rendered in SearchBar mode has to be cleared after submitting                                                                                                                                                                                  |
| data              | Array(Object)      | **searchBar**               | If your header is on top of a list of items, you can send to the header the data you are listing to get a filtered version of that list with the method <<onChangeSearchBar>>                                                                                         |
| searchPropNames   | Array(String)      | -                           | To filter the array sent in the data prop, you need to put at least 1 reference of the attribute you want to focus on, Ex: [{title: 'Hello'}], the respective form is search_PropName_1="title", this function will compare the TextInput value with the object value |  |
| onChangeSearchBar | Function           | **data, search_PropName_1** | Function executed when TextInput rendered in SearchBar mode changes its content, but this time, it returns the filtered data of the array sent in its input                                                                                                           |
| theme             | ThemeType          | -                           | Assigns themed colors to Header following the ThemeType Schema                                                                                                                                                                                                        |

#### _Usage_:

```js
import { Header } from "react-native-muffin";

class SomeComponent extends Component {
  render() {
    return (
      <Header
        title={"Home"}
        rightIcons={[
          {
            name: "bell",
            onPress: () => console.log("Right Pressed!"),
          },
        ]}
        leftIcons={[
          {
            name: "arrow-back",
            onPress: () => console.log("Left Pressed!"),
          },
        ]}
      />
    );
  }
}
```

# Functions

### SimpleAlert()

Executes a React Native alert but as a function receiving 7 parameters

#### _Params_:

- Title: Title of the Alert (String)
- SubTitle: Subtitle of the Alert (String)
- RightButtonText: Title of right button (String)
- onPressRightButton: Function executed on press right button (Function)
- LeftButtonText: Title of left button (String)
- onPressLeftButton: Function executed on press left button (Function)
- Cancelable: Sets if the alert can be cancelled (Boolean)

### ConfigAlert()

Executes a React Native alert but only receiving one parameter, an object that has the 7 parameters from SimpleAlert but as attributes

#### _Param_:

- Object:
  - title: Title of the Alert (String)
  - subTitle: Subtitle of the Alert (String)
  - rightButtonText: Title of right button (String)
  - onPressRightButton: Function executed on press right button (Function)
  - leftButtonText: Title of left button (String)
  - onPressLeftButton: Function executed on press left button (Function)
  - cancelable: Sets if the alert can be cancelled (Boolean)

### CopyToClipboard()

Copies into the device clipboard the text sent to the function

#### _Param_:

- Text: Send as parameter the text you want to copy on your clipboard (String)

### ValidateEmptyObject()

Like a regular validation but returns false if object doesn't have any key or attribute

#### _Param_:

- Objc: It will return true if Object sent has any key. instead, if object is equal to "{}" returns false (Object)

### RoundFixed2()

Returns a rounded number based on input, already fixed by 2 decimals

#### _Param_:

- Number: Float or integer numbers are valid <Number>

### UpdateReducer()

Returns a fixed & updated reducer based on the Current Reducer and the Initial Reducer, but it needs a specific process to make it work

#### _Param_:

- Object:
  - InitialReducer: Initial state defined for the reducer (Object)
  - CurrentReducer: Current state of the reducer you want to update (Object)

#### Setup:

```js
import { UpdateReducer } from "react-native-muffin";
import produce from "immer";

const initialReducer = {
  property1: {
    property3: "hello",
    property4: false,
  },
  property2: [],
};

const reducer = (state = initialReducer, action) => {
  produce(state, (draft) => {
    switch (action.type) {
      case "UPDATE_REDUCER":
        const Updated = UpdateReducer({
          InitialReducer: initialReducer,
          CurrentReducer: { ...state },
        });
        Object.keys(initialReducer).forEach((key) => {
          draft[key] = Updated[key] ? Updated[key] : initialReducer[key];
        });
        break;
      default:
        return state;
    }
  });
};

export default reducer;
```

After the setup, you can use it anywhere in the code by using the function

```js
dispatch({ type: "UPDATE_REDUCER" });
```

in any of your "connected to redux" components using "mapDispatchToProps", (Is needed a unique setup for each reducer, and a dispatch as well...)

## License

[MIT](https://choosealicense.com/licenses/mit/)
