import { Alert, Clipboard } from "react-native";
import { AlertConfigType } from "../types/functions/alert.functions";

/**
 * @param {Array<Object>} data An array of the data you want to filter
 * @param {String} text Equivalent to the filter's SearchText
 * @param {Array<String>} searchProps Array of prop names to search for in object from provided data
 * @returns {Array<Object>} Returns an array of the input's filtered data by all the input's propNames
 */
export const FilterData = (data, text, searchProps) => {
  let FilteredData = [];
  if (text === "") {
    FilteredData = data;
  } else {
    const filter = text.toUpperCase();
    searchProps.forEach((propName) => {
      const Try = data.filter((item) => {
        const Name = item[propName]?.toUpperCase();
        return Name?.includes(filter);
      });
      if (Validate(Try) && Try.length && Try.length > 0) {
        FilteredData = Try;
      }
    });
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
 * @param {{}} Objct Like a regular validation but returns false if object doesn't have any key or attribute
 * @returns {Boolean}
 */
export const ValidateEmptyObject = (Objct) => {
  return Validate(Objct) && Object.keys(Objct).length > 0;
};

/**
 * @description Compares similarities between 2 objects and returns true if they are equal, otherwise, returns false
 * @param {{}} Obj1
 * @param {{}} Obj2
 * @returns {Boolean}
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
 * @param {{InitKey: Object, CurrentKey: Object}} config
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

/**
 * @description Like a regular validation but returns false even if input is equal to "undefined"
 * @param {any} something
 */
export const Validate = (something) => {
  return something && something !== undefined;
};
