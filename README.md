# react-native-muffin

# !!! WARNING !!!

This package is still in development, so most of its content has bugs, i do NOT recommend using this early versions for important apps, use it at your own risk. 

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

#### *Props*:

|Name|Type|Requires|Description|
|-|-|-|-|
|name|String|-|Name of the icon is going to be rendered, default is 'person'|
|size|Number|-|Size of the icon, default value is 25|
|color|String|-|Color of the icon, default is 'blue'|
|onPress|Function|-|Function to execute when pressing the icon|
|style|StyleProp<ViewStyle>|-|Optional style to apply on Image component, (has higher priority than color and size)|

#### *Usage*:

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

### Dialog

#### *Props*:

|Name|Type|Requires|Description|
|-|-|-|-|
|visible|Boolean|-|[The visible prop determines whether your dialog is visible.](https://reactnative.dev/docs/modal#visible)|
|title|String|-|The title prop provides a Text Component in the dialog where displays the prop|
|titleStyle|StyleProp<TextStyle>|-|Sets the style of the title Text Component|
|message|String|-|The message prop provides a Text Component in the dialog where displays the prop, it's like a subtitle for the dialog|
|messageStyle|StyleProp<TextStyle>|-|Sets the style of the message Text Component|
|buttons|Array<React.Component>|-|[The buttons prop is an array where you can render various React Components](https://www.npmjs.com/package/react-native-simple-dialogs)|
|buttonsStyle|StyleProp<ViewStyle>|-|Sets the style of the main external View Component where buttons are rendered|
|dialogStyle|StyleProp<ViewStyle>|-|Sets the style of the main internal View Component|
|overlayStyle|StyleProp<ViewStyle>|-|Sets the style of the main external View Component|
|contentStyle|StyleProp<ViewStyle>|-|Sets the style of the external Children Component|
|animationType|String|-|[The animationType prop controls how the dialog animates.](https://reactnative.dev/docs/modal#animationtype)|
|onDismiss|Function|-|[The onDismiss prop allows passing a function that will be called once the dialog has been dismissed.](https://reactnative.dev/docs/modal#ondismiss)|
|onShow|Function|-|[The onShow prop allows passing a function that will be called once the dialog has been shown.](https://reactnative.dev/docs/modal#onshow)|
|onRequestClose|Function|-|[The onRequestClose callback is called when the user taps the hardware back button on Android.](https://reactnative.dev/docs/modal#onrequestclose)|
|onTouchOutside|Function|-|[The onTouchOutside callback is called when the user taps outside the dialog's area](https://www.npmjs.com/package/react-native-simple-dialogs)|
|onOrientationChange|Function|-|[The supportedOrientations prop allows the dialog to be rotated to any of the specified orientations.](https://reactnative.dev/docs/modal#supportedorientations)|
|supportedOrientations|String|-|[Determines when the keyboard should stay visible after a tap](https://reactnative.dev/docs/scrollview#keyboardshouldpersisttaps)|
|keyboardShouldPersistTaps|String|-|[Determines when the keyboard should stay visible after a tap](https://reactnative.dev/docs/scrollview#keyboardshouldpersisttaps)|
|keyboardDismissMode|String|-|[Determines whether the keyboard gets dismissed in response to a drag.](https://reactnative.dev/docs/scrollview#keyboarddismissmode)|




#### *Usage*:

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

### Header

#### *Props*:

|Name|Type|Requires|Description|
|-|-|-|-|
|title|String|-|Title that header is going to show|
|rightIconName|String|-|Name of the icon to show on the right side|
|rightIconName2|String|-|Name of the icon to show next to first Right Icon|
|rightIconName3|String|-|Name of the icon to show next to second Right Icon|
|leftIconName|String|-|Name of the icon to show on the left side|
|onPressRight|Function|**rightIconName**|Function executed by first Right Icon|
|onPressRight2|Function|**rightIconName2**|Function executed by second Right Icon|
|onPressRight3|Function|**rightIconName3**|Function executed by third Right Icon|
|onPressLeft|Function|**leftIconName**|Function executed by first Left Icon|
|searchBar|Boolean|-|Indicates to the Header component when it has to render in SearchBar mode|
|placeholder|String|-|Placeholder of the TextInput rendered in SearchBar mode|
|autofocus|Boolean|-|It represents the autofocus prop of the TextInput rendered in SearchBar mode|
|onChangeText|Function|**searchBar**|Function executed when TextInput rendered in SearchBar mode changes its content, as normal, it returns the text from input: (text) => {}|
|onSubmitSearch|Function|**searchBar**|Function executed when Enter Key is pressed on TextInput rendered in SearchBar mode|
|cleanTextOnSubmit|Boolean|**searchBar**|Indicates if TextInput rendered in SearchBar mode has to be cleared after submiting|
|data|Array<Object>|**searchBar**|If your header is on top of a list of items, you can send to the header the data you are listing to get a filtered version of that list with the method <<onChangeSearchBar>>|
|search_PropName_1|String|-|To filter the array sent in the data prop, you need to put at least 1 reference of the attribute you want to focus on, Ex: [{title: 'Hello'}], the respective form is search_PropName_1="title", this function will compare the TextInput value with the object value|
|search_PropName_2|String|**search_PropName_1**|Same as search_PropName_1 but with less priority|
|search_PropName_3|String|**search_PropName_2**|Same as search_PropName_2 but with even less priority|
|onChangeSearchBar|Function|**data, search_PropName_1**|Function executed when TextInput rendered in SearchBar mode changes its content, but this time, it returns the filtered data of the array sent in its input|

#### *Usage*:

```js
import { Header } from 'react-native-muffin'

class SomeComponent extends Component {
  render() {
    return (
        <Header
          title={'Home'}
          rightIconName={'bell'}
          leftIconName={'arrow-back'}
          onPressRight={() => console.log('Right Pressed!')}
          onPressLeft={() => console.log('Left Pressed!')} 
        />
    );
  }
}
```



## License
[MIT](https://choosealicense.com/licenses/mit/)