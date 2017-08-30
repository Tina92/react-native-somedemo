import React, { Component } from 'react';
import { StyleSheet,Text,View,ScrollView,Dimensions } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const  window = Dimensions.get('window');
export default class Menu extends Component{
    static propTypes={
        onItemSelected:React.PropTypes.func.isRequired,
    };
    render (){
        return (
            <ScrollView style={styles.menu} scrollsToTop={false}>
                <View style={styles.avatarContainer}>
                    <Icon name='address-book' size={24} color="#4F8EF7" />
                    <Text style={styles.nickName}>飞奔的小马</Text>
                </View>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的收藏')}>我的收藏</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的文章')}>我的文章</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    menu:{
      flex:1,
        width:window.width,
        height:window.height,
        backgroundColor:'gray',
        padding:20
    },
    avatarContainer:{
        marginBottom:20,
        marginTop:20
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20,
    },
    nickName:{
        position:'absolute',
        left:70,
        top:20,
        fontSize:18,
    },
    item:{
        fontSize:16,
        fontWeight:'300',
        paddingTop:10,
    }
});