import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './../component/ListItem';

export default class FirstPage extends Component{
    render (){
        return (
            <View style={styles.container}>
                <ListItem />
            </View>
        );   
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1
  }
});