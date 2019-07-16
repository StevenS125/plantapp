/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from "native-base";
import AppNavigator from './app/app.navigator';



export default class App extends Component<{}> {
  render() {
    return (
      <Root>
      <AppNavigator/>
      </Root>
    );
  }
}


