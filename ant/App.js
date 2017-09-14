import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
// import FlexExample from './src/FlexExample';
import WingBlankExample from './src/WingBlankExample';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<FlexExample />*/}
        <WingBlankExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
