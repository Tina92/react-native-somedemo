import React,{ Component } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Drawer, List, NavBar, Button } from 'antd-mobile';

export default class DrawerExample extends Component {
    // state = { open: true, }
    onOpenChange = (isOpen) => {
        /* tslint:disable: no-console */
        console.log('是否打开了 Drawer', (isOpen).toString());
    }
    render() {
        const itemArr = Array.apply(null, Array(20)).map(function (_, i) { return i; }).map((_i, index) => {
        if (index === 0) {
            return (
            <List.Item
                key={index}
                multipleLine
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Categories - {index}</Text>
                <Button type="primary" size="small" onClick={() => this.drawer.closeDrawer()}>
                    close drawer
                </Button>
                </View>
            </List.Item>
            );
        }
        return (
            <List.Item key={index}>
            <Text>Categories - {index}</Text>
            </List.Item>
        );
        });
        const sidebar = (
            <ScrollView style={[styles.container]}>
                <List>{itemArr}</List>
            </ScrollView>
        );

        return (<View>
            <NavBar iconName="ellipsis" onLeftClick={() => this.drawer && this.drawer.openDrawer()}>Basic</NavBar>
            <Drawer
                sidebar={sidebar}
                position="left"
                open={false}
                drawerRef={(el) => this.drawer = el}
                onOpenChange={this.onOpenChange}
                drawerBackgroundColor="#ccc"
            >
            </Drawer>
        </View>)
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

