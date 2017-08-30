import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, } from 'react-native';
import Sliders from './../component/Slider';
import AutoLayout from './../component/AutoResponsive';

export default class Advertise extends Component{
    render (){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Sliders />
                    <AutoLayout />
                </View>
            </ScrollView>
        );   
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1
  }
});