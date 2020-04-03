import {Alert, Clipboard} from 'react-native';
import _ from 'lodash';

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
    let results = data.filter(item => {
      return _.includes(item[propName1].toUpperCase(), filter);
    });
    if (results === "" || (results === undefined && propName2)) {
      results = data.filter(item => {
        return _.includes(item[propName2].toUpperCase(), filter);
      });
      if (results === "" || (results === undefined && propName3)) {
        results = data.filter(item => {
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
 * @param {String} RightButtonText  Title of right button
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
      text: LeftButtonText ? LeftButtonText : 'Cancel',
      onPress: () => onPressLeftButton && onPressLeftButton(),
    };
    Buttons.push(Button2);
  }
  if (RightButtonText) {
    Button1 = {
      text: RightButtonText ? RightButtonText : 'Ok',
      onPress: () => onPressRightButton && onPressRightButton(),
    };
    Buttons.push(Button1);
  }

  Alert.alert(Title ? Title : 'Alert', SubTitle && SubTitle, Buttons, {cancelable: Cancelable && Cancelable});
};

/**
 * @param {String} Text Send as parameter the text you want to copy on your clipboard
 */
export const CopyToClipboard = Text => {
  Clipboard.setString(Text);
};