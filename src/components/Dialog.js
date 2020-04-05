/**
 * MIT License
 *
 * Copyright (c) 2017 Douglas Nassif Roma Junior
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {Component} from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
const {OS} = Platform;
import {DialogProps} from '../types/components/dialog.component';

/**
 * @author Douglas Nassif Roma Junior
 * @see https://www.npmjs.com/package/react-native-simple-dialogs
 * @license MIT
 * @copyright (c) 2017 Douglas Nassif Roma Junior
 * @extends {Component<DialogProps>}
 */
export class Dialog extends Component {
  render() {
    const {
      dialogStyle,
      visible,
      animationType,
      onRequestClose,
      onShow,
      onOrientationChange,
      onTouchOutside,
      overlayStyle,
      supportedOrientations,
      keyboardDismissMode,
      keyboardShouldPersistTaps,
      children,
      contentStyle,
      title,
      titleStyle,
      message,
      messageStyle,
      buttons,
      buttonsStyle,
      onDismiss,
    } = this.props;
    /**
     * @param {{onTouch}} params
     */
    const RenderOutsideTouchable = params => {
      const {onTouch} = params;
      const view = <View style={styles.RenderOutsideTouchable} />;
      if (!onTouch) {
        return view;
      }
      return (
        <TouchableWithoutFeedback
          onPress={onTouch}
          style={styles.RenderOutsideTouchable}>
          {view}
        </TouchableWithoutFeedback>
      );
    };

    return (
      <Modal
        onDismiss={onDismiss}
        animationType={animationType}
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose ? onRequestClose : () => null}
        onShow={onShow}
        onOrientationChange={onOrientationChange}
        supportedOrientations={supportedOrientations}>
        <ScrollView
          bounces={false}
          style={styles.Flex_1}
          contentContainerStyle={styles.Flex_1}
          keyboardDismissMode={keyboardDismissMode}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
          <View style={[styles.MainView, overlayStyle]}>
            <RenderOutsideTouchable onTouch={onTouchOutside} />
            <View style={[styles.ChildrenView, dialogStyle]}>
              {title && (
                <Text style={[styles.RenderTitleText, titleStyle]}>
                  {title}
                </Text>
              )}
              {message && (
                <Text style={[styles.RenderTitleText, messageStyle]}>
                  {message}
                </Text>
              )}
              {children && (
                <View style={[styles.RenderContentView, contentStyle]}>
                  {children}
                </View>
              )}
              {buttons && buttons.length && (
                <View
                  style={[OS === 'ios' && styles.ContainerStyle, buttonsStyle]}>
                  {buttons.map(btn => (
                    <>{btn}</>
                  ))}
                </View>
              )}
            </View>
            <RenderOutsideTouchable onTouch={onTouchOutside} />
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  ContainerStyle: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  RenderContentView: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  RenderTitleText: {
    textAlign: OS === 'ios' ? 'center' : null,
    color: '#000000DD',
    fontSize: 20,
    padding: 24,
    paddingBottom: 0,
  },
  RenderMessageText: {
    textAlign: OS === 'ios' ? 'center' : null,
    color: '#000000DD',
    fontSize: 16,
    margin: 24,
    marginBottom: 0,
  },
  RenderOutsideTouchable: {flex: 1, width: '100%'},
  Flex_1: {flex: 1},
  MainView: {
    flex: 1,
    backgroundColor: '#000000AA',
    padding: 24,
  },
  ChildrenView: {
    backgroundColor: OS === 'ios' ? '#e8e8e8' : '#ffffff',
    width: '100%',
    shadowOpacity: 0.24,
    borderRadius: OS === 'ios' ? 5 : 1,
    elevation: 4,
    shadowOffset: {
      height: 4,
      width: 2,
    },
  },
});

export default Dialog;
