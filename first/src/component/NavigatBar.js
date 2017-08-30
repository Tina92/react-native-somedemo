import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import FirstPage from './../pages/FirstPage';
import Gesture from './../pages/Gesture';
import Advertise from './../pages/Advertise';
import Form from './../pages/Form';

export default class NavigatorBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Event'
        }
    }
    
    render() {
         return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'Event'}
                        //标题
                        title="Event"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Icon name='address-book' size={24} color="#4F8EF7" />}
                        //选中时图标
                        renderSelectedIcon={() => <Icon name='address-book' size={24} color="red" />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'Event' })}>
                        <View style={styles.page0}>
                            <FirstPage />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="Log"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name='home' size={28} color="#4F8EF7" />}
                        renderSelectedIcon={() =>  <Icon name='home' size={28} color="red" />}
                        onPress={() => this.setState({ selectedTab: 'Log' })}>
                        <View style={styles.page0}>
                            <Gesture />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="Device"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name='clipboard' size={24} color="#4F8EF7" />}
                        renderSelectedIcon={() => <Icon name='clipboard' size={24} color="red" />}
                        onPress={() => this.setState({ selectedTab: 'Device' })}>
                        <View style={styles.page1}>
                            <Form />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'User'}
                        title="User"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name='tachometer' size={28} color="#4F8EF7" />}
                        renderSelectedIcon={() => <Icon name='tachometer' size={28} color="red" />}
                        onPress={() => this.setState({ selectedTab: 'User' })}>
                        <View style={styles.page1}>
                            <Advertise />
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 4
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});