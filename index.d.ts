import * as React from "react";
import * as ReactNative from "react-native";
import { HeaderProps } from "./src/types/components/header.component";
import { IconProps } from "./src/types/components/icon.component";
import { DialogProps } from "./src/types/components/dialog.component";
import { AlertConfigType } from "./src/types/functions/alert.functions";

declare module "react-native-muffin" {
  namespace ReactNativeMuffin {
    interface Header extends HeaderProps {}
    interface Icon extends IconProps {}
    interface Dialog extends DialogProps {}
  }

  export class Header extends React.Component<ReactNativeMuffin.Header, any> {}

  export class Icon extends React.Component<ReactNativeMuffin.Icon, any> {}

  export class Dialog extends React.Component<ReactNativeMuffin.Dialog, any> {}

  /**
   * @param {String} Title Title of the Alert
   * @param {String} SubTitle Subtitle of the Alert
   * @param {String} RightButtonText  Title of right button
   * @param {Function} onPressRightButton Function executed on press right button
   * @param {String} LeftButtonText Title of left button
   * @param {Function} onPressLeftButton Function executed on press left button
   * @param {Boolean} Cancelable Sets if the alert can be cancelled
   */
  export function SimpleAlert(
    Title: String,
    SubTitle: String,
    RightButtonText: String,
    onPressRightButton: Function,
    LeftButtonText: String,
    onPressLeftButton: Function,
    Cancelable: Boolean
  ): void;

  /**
   * @param {AlertConfigType} Config Configuration of the alert sent as an object instead of separate params
   */
  export function ConfigAlert(Config: AlertConfigType): void;

  /**
   * @param {String} TextToCopy Text is going to be copied to clipboard
   */
  export function CopyToClipboard(TextToCopy: String): void;

  /**
   * @param {{}} Objct
   * @returns {Boolean} Returns true if Object has any key. if object == {} returns false
   */
  export function ValidateEmptyObject(Objct: Object): Boolean;

  /**
   * @param {Number} number
   * @returns {Number} Returns a fixed rounded number with 2 decimals
   */
  export function RoundFixed2(number: Number): Number;

  /**
   * @param {{InitialReducer: Object, CurrentReducer: Object}} param
   * @returns {{}}
   */
  export function UpdateReducer(param: {
    InitialReducer: Object;
    CurrentReducer: Object;
  }): Object;
}
