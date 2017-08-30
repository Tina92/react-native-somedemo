import React, { Component } from 'react' ;
import {
  View, Text, StyleSheet,
  TouchableHighlight, Animated,
  Platform, Dimensions, Image
} from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const WINDOW = Dimensions.get('window')
var closeTimeoutId = null
 
export default class leftBar extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    showCancel: PropTypes.bool
  }
  static defaultProps =  {
    onClose: null,
    onCancel: null,
    closeInterval: 4000,
    showCancel: false,
 
  }
  constructor(props) {
    super(props)
    this.state = {
      animationValue: new Animated.Value(0),
      duration: 450,
      isOpen: false,
      topValue: 0
    }
    // Render
    this.renderButton = this.renderButton.bind(this)
    this.renderDropDown = this.renderMyinfo.bind(this)
    // Action
    this.alert = this.alert.bind(this)
    this.dismiss = this.dismiss.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onClose = this.onClose.bind(this)
    // Util
    this.animate = this.animate.bind(this)
 
  }
 
  alert() {
 
    if (this.state.isOpen) {
      this.dismiss()
      return
    }
    if (this.state.isOpen == false) {
      this.setState({
        isOpen: true,
        topValue: 0
      })
    }
    this.animate(1)
     if (this.props.closeInterval > 1) {
      closeTimeoutId = setTimeout(function() {
        this.onClose()
      }.bind(this), this.props.closeInterval)
    }
  }
  dismiss(onDismiss) {
    if (this.state.isOpen) {
      if (closeTimeoutId != null) {
        clearTimeout(closeTimeoutId)
      }
      this.animate(0)
      setTimeout(function() {
        if (this.state.isOpen) {
          this.setState({
            isOpen: false
          })
          if (onDismiss) {
    
            onDismiss('warn')
          }
        }
      }.bind(this), (this.state.duration))
    }
  }
  onClose() {
    this.dismiss(this.props.onClose)
  }
  onCancel() {
    this.dismiss(this.props.onCancel)
  }
  animate(toValue) {
    Animated.spring (
      this.state.animationValue, {
        toValue: toValue,
        duration: this.state.duration,
        friction: 9
      }
    ).start()
  }
 
 
   
  renderButton( onPress, isRendered) {
    if ( isRendered) {
      return (
         <View style={{top:0,width:WINDOW.width,height:WINDOW.height,backgroundColor:'green'}}>
 
             <TouchableHighlight  onPress={onPress} >
               <Icon name='address-book' size={24} color="#4F8EF7" />
 
              </TouchableHighlight>
         </View>
 
     
      )
    }
    return null
  }
  renderMyinfo(isOpen) {
    if (isOpen == true) {
 
          style = {backgroundColor: '#cd853f'}
 
      return (
          <Animated.View
           ref={(ref) => this.mainView = ref}
           style={{
              transform: [{
                translateX: this.state.animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-WINDOW.width, 0]
                }),
              }],
              position: 'absolute',
              top: this.state.topValue,
              left: 0,
              right: 0
            }}>
              <View style={ {backgroundColor: '#cd853f'}}>
                {this.renderButton( this.onCancel, this.props.showCancel)}
              </View>
          </Animated.View>
      )
    }
    return null
  }
  render() {
    return (
      this.renderMyinfo(this.state.isOpen)
    )
  }
}
 