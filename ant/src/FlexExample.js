import React,{ Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile';
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


export default class FlexExample extends Component {
  render() {
    return (
        <ScrollView className="flex-container" style={styles.flexContainer}>
            <Text className="sub-title" style={styles.subTitle}>基本</Text>
            <Flex>
                <Flex.Item><PlaceHolder /></Flex.Item>
                <Flex.Item><PlaceHolder /></Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                <Flex.Item><PlaceHolder /></Flex.Item>
                <Flex.Item><PlaceHolder /></Flex.Item>
                <Flex.Item><PlaceHolder /></Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Text className="sub-title" style={styles.subTitle}>wrap 换行</Text>
            <Flex wrap="wrap">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace size="lg" />

            <Text className="sub-title" style={styles.subTitle}>轴对齐方式</Text>
            <Flex justify="center">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace />
            <Flex justify="end">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace />
            <Flex justify="between">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace />
            <Flex align="start">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline small" style={[styles.inline,styles.small]} />
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace />
            <Flex align="end">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline small" style={[styles.inline,styles.small]} />
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
            <WhiteSpace />
            <Flex align="baseline">
                <PlaceHolder className="inline" style={styles.inline}/>
                <PlaceHolder className="inline small" style={[styles.inline,styles.small]} />
                <PlaceHolder className="inline" style={styles.inline}/>
            </Flex>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    flexContainer: {
        marginLeft: 15,
        marginRight: 15
    },
    inline: {
        width: 80,
        marginTop: 9,
        marginLeft: 9,
        marginBottom: 9,
        marginRight: 0
    },
    small: {
        height: 20,
        lineHeight: 20
    },
    subTitle: {
        color:'#888',
        fontSize: 14,
        paddingTop: 30,
        paddingBottom: 18
    }
});