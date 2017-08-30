// src/components/Hello.tsx
import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
export interface Props{
    name: string;
}

interface States {
  enthusiasmLevel: number;
  text: string;
}

/*function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <View style={styles.root}>
        <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
        </Text>
        <View style={styles.buttons}>
            <View style={styles.button}>
            <Button title="-" onPress={onDecrement || (() => {})} accessibilityLabel="decrement" color='red' />
            </View>
            <View style={styles.button}>
                <Button title="+" onPress={onIncrement || (() => {})}  accessibilityLabel="increment" color='blue' />
            </View>
        </View>
    </View>
  );
}*/
export default class Hello extends React.Component<Props, States>{
    public state : States;
    constructor(props : Props){
        super(props);
    }
    componentWillMount(){  
        console.log('componentWillMount');  
        this.setState({enthusiasmLevel: 1});  
    } 
    componentDidMount(){  
        console.log('componentDidMount');    
    }  
    render(){
        return(
            <View style={{padding: 10}}>
                <Text style={styles.greeting}>
                Hello {this.props.name + getExclamationMarks(this.state.enthusiasmLevel)}
                </Text>
                <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text}
                </Text>
            </View>
        )
    }
}

// export default Hello;

// styles

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}