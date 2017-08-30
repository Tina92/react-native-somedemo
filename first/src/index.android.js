/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import Password from './pages/Password';

export default class first extends Component {
  
  render() {
    let defaultName = 'Password'; 
    let defaultComponent = Password;
    return (
        <View style={styles.container}>
          <Navigator.Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                  return ({
                    ...Navigator.Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
                    gestures: null
                    });
                }}
              renderScene={(route, navigator) => {
                  let Component = route.component;
                  //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                  //navigator对象在导航容器跳转时一直存在
                  return <Component {...route.params} navigator={navigator} />
                }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('first', () => first);
