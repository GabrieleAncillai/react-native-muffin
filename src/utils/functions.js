import { Alert, Clipboard } from "react-native";
import _ from "lodash";
import { AlertConfigType } from "../types/functions/alert.functions";

/**
 * @dependence '_' from 'lodash'
 * @param {Array} data An array of the data you want to filter
 * @param {String} text Equivalent to the filter's SearchText
 * @param {String} propName1 First prop name to search for in object from provided data
 * @param {String} propName2 Second prop name to search for in object from provided data
 * @param {String} propName3 Third prop name to search for in object from provided data
 * @returns {Array<Object>} Returns an array of the input's filtered data by all the input's propNames
 */
export const FilterData = (data, text, propName1, propName2, propName3) => {
  let FilteredData = [];
  if (text === "") {
    FilteredData = data;
  } else {
    const filter = text.toUpperCase();
    let results = data.filter((item) => {
      return _.includes(item[propName1].toUpperCase(), filter);
    });
    if (results === "" || (results === undefined && propName2)) {
      results = data.filter((item) => {
        return _.includes(item[propName2].toUpperCase(), filter);
      });
      if (results === "" || (results === undefined && propName3)) {
        results = data.filter((item) => {
          return _.includes(item[propName3].toUpperCase(), filter);
        });
      }
    }
    FilteredData = results;
  }
  return FilteredData;
};

/**
 * @param {String} Title Title of the Alert
 * @param {String} SubTitle Subtitle of the Alert
 * @param {String} RightButtonText Title of right button
 * @param {Function} onPressRightButton Function executed on press right button
 * @param {String} LeftButtonText Title of left button
 * @param {Function} onPressLeftButton Function executed on press left button
 * @param {Boolean} Cancelable Sets if the alert can be cancelled
 * @returns {AlertType} Returns a ReactNative Alert with default values if null and with assigned values if data
 */
export const SimpleAlert = (
  Title,
  SubTitle,
  RightButtonText,
  onPressRightButton,
  LeftButtonText,
  onPressLeftButton,
  Cancelable
) => {
  let Buttons = [];
  let Button1;
  let Button2;
  if (LeftButtonText) {
    Button2 = {
      text: LeftButtonText ? LeftButtonText : "Cancel",
      onPress: () => onPressLeftButton && onPressLeftButton(),
    };
    Buttons.push(Button2);
  }
  if (RightButtonText) {
    Button1 = {
      text: RightButtonText ? RightButtonText : "Ok",
      onPress: () => onPressRightButton && onPressRightButton(),
    };
    Buttons.push(Button1);
  }
  Alert.alert(Title ? Title : "Alert", SubTitle && SubTitle, Buttons, {
    cancelable: Cancelable && Cancelable,
  });
};

/**
 * @param {AlertConfigType} Config Title of the Alert
 * @returns {AlertType} Returns a ReactNative Alert with default values if null and with assigned values if data
 */
export const ConfigAlert = (Config) => {
  const {
    title,
    subTitle,
    rightButtonText,
    onPressRightButton,
    leftButtonText,
    onPressLeftButton,
    cancelable,
  } = Config;
  let Buttons = [];
  let Button1;
  let Button2;
  if (leftButtonText) {
    Button2 = {
      text: leftButtonText ? leftButtonText : "Cancel",
      onPress: () => onPressLeftButton && onPressLeftButton(),
    };
    Buttons.push(Button2);
  }
  if (rightButtonText) {
    Button1 = {
      text: rightButtonText ? rightButtonText : "Ok",
      onPress: () => onPressRightButton && onPressRightButton(),
    };
    Buttons.push(Button1);
  }
  Alert.alert(title ? title : "Alert", subTitle && subTitle, Buttons, {
    cancelable: cancelable && cancelable,
  });
};

/**
 * @param {String} Text Send as parameter the text you want to copy on your clipboard
 */
export const CopyToClipboard = (Text) => {
  Clipboard.setString(Text);
};

/**
 * @param {{}} Objct
 * @returns {Boolean} Returns true if Object has any key. if object == {} returns false
 */
export const ValidateEmptyObject = (Objct) => {
  return Object.keys(Objct).length > 0;
};

/**
 * @param {{}} Obj1
 * @param {{}} Obj2
 */
export const CompareTwoObjects = (Obj1, Obj2) => {
  if (typeof Obj1 === "object" && typeof Obj2 === "object") {
    return JSON.stringify(Obj1) === JSON.stringify(Obj2);
  } else {
    return false;
  }
};

/**
 * @param {Number} number
 * @returns {Number}
 */
export const RoundFixed2 = (number) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

/**
 * @param {{InitialReducer: Object, CurrentReducer: Object}} param0
 * @returns {{}}
 */
export const UpdateReducer = ({ InitialReducer, CurrentReducer }) => {
  let NewReducer = {};
  if (
    InitialReducer &&
    CurrentReducer &&
    ValidateEmptyObject(InitialReducer) &&
    ValidateEmptyObject(CurrentReducer)
  ) {
    NewReducer = { ...CurrentReducer };
    Object.keys(InitialReducer).forEach(async (prop) => {
      const validation =
        (typeof InitialReducer[prop] !== "object" &&
          InitialReducer[prop] !== CurrentReducer[prop]) ||
        (typeof InitialReducer[prop] === "object" &&
          !CompareTwoObjects(InitialReducer[prop], CurrentReducer[prop]));

      if (validation) {
        const NewProp = await CompareKeys({
          InitKey: InitialReducer[prop],
          CurrentKey: CurrentReducer[prop],
        });
        NewReducer[prop] = NewProp;
      }
    });
  }
  return NewReducer;
};

/**
 * @param {{InitKey: Object, CurrentKey: Object}} param0
 * @returns {any}
 */
const CompareKeys = async ({ InitKey, CurrentKey }) => {
  let NewKey = CurrentKey;
  if (InitKey && InitKey !== undefined) {
    if (!CurrentKey || CurrentKey === undefined) {
      NewKey = InitKey;
    } else if (
      typeof CurrentKey === "object" &&
      ValidateEmptyObject(CurrentKey)
    ) {
      Object.keys(CurrentKey).forEach(async (key) => {
        NewKey = await CompareKeys({
          InitKey: InitKey[key],
          CurrentKey: CurrentKey[key],
        });
      });
    } else {
      NewKey = CurrentKey;
    }
  }
  return NewKey;
};
