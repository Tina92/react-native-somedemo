import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, Picker, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',language:''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={styles.input}
          placeholder="First"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Second"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}
            style={styles.input}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Button
          onPress={onButtonPress}
          style={styles.button}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
        <TouchableOpacity onPress={onButtonPress}>
            <View style={styles.button}>
                <Text style={styles.text}>Press me</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

}
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const styles = {
    input: {
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 40
    },
    button: {
        margin:5,
        padding:15,
        borderRadius:5,
        flex:1,
        backgroundColor: 'green',
        justifyContent: 'center',  
        alignItems: 'center'
    },
    text:{
      color: 'white',
      padding: 5,
      fontFamily:'Georgia',
      fontSize:24
    }
};