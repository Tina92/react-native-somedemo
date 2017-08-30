import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';

var ITEM_HEIGHT = 100;

export default class ListItem extends Component {

    _flatList;

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = '#'+Math.floor(Math.random()*0xffffff).toString(16);
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor,margin:2},styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }

    render() {
        var data = [];
        for (var i = 0; i < 4; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                {/*<Button title='滚动到指定位置' onPress={()=>{
                    //this._flatList.scrollToEnd();
                    //this._flatList.scrollToIndex({viewPosition:0,index:8});
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/>*/}
                {/*<View style={{flex:1}}>*/}
                    <FlatList
                        style={styles.flatListStyle}
                        ref={(flatList)=>this._flatList = flatList}
                       // ListHeaderComponent={this._header}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}

                        numColumns ={2}
                        //columnWrapperStyle={{padding:5}}

                        //horizontal={true}

                       // getItemLayout={(data,index)=>(
                        //{length: ITEM_HEIGHT*10, offset: (ITEM_HEIGHT+2) *10* index, index}
                        //)}

                        //onEndReachedThreshold={5}
                        //onEndReached={(info)=>{
                        //console.warn(info.distanceFromEnd);
                        //}}

                        //onViewableItemsChanged={(info)=>{
                        //console.warn(info);
                        //}}
                        data={data}>
                    </FlatList>
                {/*</View>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    flatListStyle: {
        padding: 20,
    }
});