import * as React from 'react'

export type DialogProps = {
    visible: Boolean,
    onDismiss: Function,
    keyboardShouldPersistTaps: 'always' | 'never' | 'handled',
    animationType: 'none' | 'slide' | 'fade',
    keyboardDismissMode: 'none' | 'on-drag' | 'interactive',
    onRequestClose: Function,
    onShow: Function,
    onOrientationChange: Function,
    onTouchOutside: Function,
    supportedOrientations: Array<
      | 'portrait'
      | 'portrait-upside-down'
      | 'landscape'
      | 'landscape-left'
      | 'landscape-right'
    >,
    buttons: Array<React.ReactElement>,
    children: React.ReactChild,
    title: String,
    message: String,
    messageStyle: Object,
    dialogStyle: Object,
    overlayStyle: Object,
    contentStyle: Object,
    titleStyle: Object,
    buttonsStyle: Object,
  };