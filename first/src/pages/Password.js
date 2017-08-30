import React, { Component } from 'react';
import {View} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import PasswordGesture from 'react-native-gesture-password';
import Main from './Main';

var Password1 = '147';
export default class Password extends Component{
    constructor(props) {
        super(props);

        this.state = {
            message: 'Please input your password.',
            status: 'normal'
        }
    }
    // Example for check password
    onEnd(password) {
        if (password == '147') {
            this.setState({
                status: 'right',
                message: 'Password is right, success.'
            });
            const {navigator} = this.props;
            if(navigator){
                navigator.push({
                    name: 'Main',
                    component:Main
                });
            }
            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
    }
    onStart() {
        this.setState({
            status: 'normal',
            message: 'Please input your password.'
        });
    }
    onReset() {
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }
    // Example for set password
    /*
    onEnd: function(password) {
        if ( Password1 === '' ) {
            // The first password
            Password1 = password;
            this.setState({
                status: 'normal',
                message: 'Please input your password secondly.'
            });
        } else {
            // The second password
            if ( password === Password1 ) {
                this.setState({
                    status: 'right',
                    message: 'Your password is set to ' + password
                });

                Password1 = '';
                // your codes to close this view
            } else {
                this.setState({
                    status: 'wrong',
                    message:  'Not the same, try again.'
                });
            }
        }
    },
    onStart: function() {
        if ( Password1 === '') {
            this.setState({
                message: 'Please input your password.'
            });
        } else {
            this.setState({
                message: 'Please input your password secondly.'
            });
        }
    },
    */

    getInitialState() {
        return {
            message: 'Please input your password.',
            status: 'normal'
        }
    }
    render() {
        return (
            <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                />
        );
    }
};
