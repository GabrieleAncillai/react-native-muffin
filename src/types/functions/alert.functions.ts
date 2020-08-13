export type AlertConfigType = {
  title: String;
  subTitle: String;
  rightButtonText: String;
  onPressRightButton: Function;
  leftButtonText: String;
  onPressLeftButton: Function;
  cancelable: Boolean;
};