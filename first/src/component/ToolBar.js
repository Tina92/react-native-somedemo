import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToolbarAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ToolBar extends Component{
    static propTypes = {
        onClicked: PropTypes.func
    }
    render(){
        return (
        <View>
            <Ionicons.ToolbarAndroid
            actions={toolbarActions}
            navIconName="ios-menu"
            onIconClicked={()=>{this.props.onClicked;}}
            style={styles.toolbar}
            titleColor="white"
            title="123" />
        </View>
        );
    }
     
}
var toolbarActions =[{title: 'Filter'}]; 

const styles =StyleSheet.create({  
  toolbar: {  
    backgroundColor: '#18b6ea',  
    height: 56,  
  },  
}); 