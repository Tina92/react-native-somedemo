/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigatorBar from './../component/NavigatBar';
import ToolBar from './../component/ToolBar';
import LeftBar from './../component/leftBar';

export default class Main extends Component {
  showLeftbar(){
    this.leftbar.alert()
  }
  render() {
    return (
      <View style={styles.container}>
        <ToolBar onClicked={()=>{this.showLeftbar()}}/>
        <NavigatorBar />
        <LeftBar ref={leftbar => this.leftbar = leftbar }
            closeInterval={0}
          onClose={(data) => this.onClose(data)}
          onCancel={(data) => this.onClose(data)}
          showCancel={true} />
      </View>
    );
  }
  closeAlert() {
    this.leftbar.onClose()
  }
  onClose(data) {
    console.log(data)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

