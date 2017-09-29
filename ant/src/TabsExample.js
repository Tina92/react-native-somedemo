import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

export default class TabsExample extends Component {
    render () {
        const tabs = [
            { title: <Badge text={'3'}>First Tab</Badge> },
            { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
            { title: <Badge dot>Third Tab</Badge> },
        ];
        
        const tabs2 = [
            { title: 'First Tab', sub: '1' },
            { title: 'Second Tab', sub: '2' },
            { title: 'Third Tab', sub: '3'},
        ];
        return (
            <View>
                 <Tabs tabs={tabs}
                    initialPage={1}
                    >
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of Third Tab</Text>
                    </View>
                    </Tabs>
                    <WhiteSpace />
                    <Tabs tabs={tabs2}
                    initialPage={1}
                    tabBarPosition="bottom"
                    >
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, backgroundColor: '#fff' }}>
                        <Text>Content of Third Tab</Text>
                    </View>
                    </Tabs>
                    <WhiteSpace />
            </View>
        );
    }
}