/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Platform,StyleSheet, View, Text , Image,ActivityIndicator,Dimensions,Modal } from 'react-native';

export default class Splash extends Component {
    componentDidMount()
    {
        setTimeout(() =>{
            this.props.navigation.navigate('Login');
        },4000)
    }
    

  render() {
    return (
        <View style={styles.container}>
        <Image source={{uri:'asset:/logo/436146d3-d290-459b-ae8a-bc5b07eacea1_200x200.png'}}
        style={styles.logo}
        />
        <ActivityIndicator size="large" color="#7e7e7e" style={{margin:10}} />
      </View>

    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    },
})