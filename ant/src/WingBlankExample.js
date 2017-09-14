import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WingBlank, WhiteSpace } from 'antd-mobile';
// import './FlexExample.css';

const PlaceHolder = props => (
    <Text
       style={{
           backgroundColor: '#ebebef',
           color: '#bbb',
           textAlign: 'center',
           height: 30,
           lineHeight: 30,
           width:'100%',
       }}
       {...props}
    >Item</Text>
);

export default class WingBlankExample extends Component{
    render(){
        return (
            <View style={{padding:1}}>
                <WingBlank><PlaceHolder /></WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="md"><PlaceHolder /></WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="sm"><PlaceHolder /></WingBlank>
            </View>
        )
    }
}