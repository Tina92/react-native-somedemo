import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';

export default class ToolsBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTab: 'redTab'
        };
    }
    
    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }} >
                <Text style={{ paddingTop: 60 }}>clicked "{pageText}", show "{pageText}" information</Text>
                <SearchBar placeholder="Search" showCancelButton />
                <Text> click to show/hide tab-bar</Text>
            </View>
        );
    }

    render() {
        return (
            <TabBar
              unselectedTintColor = "#949494"
              tintColor = "#33A3F4"
              barTintColor = "red"
            >
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={{ uri:'../asset/alipay@2x.png', scale: 3 }}
                    selectedIcon={{ uri:'../asset/alipay@2x.png', scale: 3 }}
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    detd-seed='logId'
                >
                    {this.renderContent('Life')}
                </TabBar.Item>
                <TabBar.Item
                    title="Koubei"
                    key="Koubei"
                    icon={{ uri:'../asset/koubei@2x.png', scale: 3 }}
                    selectedIcon={{ uri:'../asset/koubei@2x.png', scale: 3 }}
                    selected={this.state.selectedTab === 'redTab'}
                    badge={'new'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    detd-seed='logId1'
                >
                    {this.renderContent('Koubi')}
                </TabBar.Item>
                <TabBar.Item
                    title="Friend"
                    key="Friend"
                    icon={{ uri:'../asset/friend@2x.png', scale: 3 }}
                    selectedIcon={{ uri:'../asset/friend@2x.png', scale: 3 }}
                    selected={this.state.selectedTab === 'greenTab'}
                    dot
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                    detd-seed='logId2'
                >
                    {this.renderContent('Friend')}
                </TabBar.Item> 
                <TabBar.Item
                    title="Busi"
                    key="Busi"
                    icon={{ uri:'../asset/busi@2x.png', scale: 3 }}
                    selectedIcon={{ uri:'../asset/busifriend@2x.png', scale: 3 }}
                    selected={this.state.selectedTab === 'yellowTab'}
                    dot
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                    }}
                    detd-seed='logId3'
                >
                    {this.renderContent('Busi')}
                </TabBar.Item>   
            </TabBar>
        )
    }
}