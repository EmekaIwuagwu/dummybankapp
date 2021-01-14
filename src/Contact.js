import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity, Alert, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: '',
      email : '',
      telephone : '',
      subject : '',
      mailbody : ''
    };
  }

  SendEmail = () =>{

    const { Fullname }  = this.state ;
    const { email }  = this.state ;
    const { telephone }  = this.state ;
    const { subject }  = this.state ;
    const { mailbody }  = this.state ;

    fetch('https://uncoiled-crust.000webhostapp.com/api/contactRequest.php',{
      method: 'POST' , 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Fullname: Fullname,
        email: email,
        telephone : telephone,
        subject : subject,
        mailbody : mailbody,
          })
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson ==='OK')
        {
          Alert.alert('Email Received');
        }else
        {
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <View>
          <ScrollView contentContainerStyle={{ justifyContent: 'space-between',alignItems:'center' }}>
          <View style={styles.space2} />
          <TextInput
        placeholder = " Name in Full"
        onChangeText={Fullname => this.setState({Fullname})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " E-mail"
        onChangeText={email => this.setState({email})}
        multiline = {true}
        numberOfLines = {15}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Telephone"
        onChangeText={telephone => this.setState({telephone})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Subject"
        onChangeText={subject => this.setState({subject})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " MailBody"
        onChangeText={mailbody => this.setState({mailbody})}
        multiline = {true}
        numberOfLines = {15}
        style={styles.input}
        />
        <View style={styles.space} />
        <TouchableOpacity onPress={() => {this.SendEmail();}} style={styles.button}>
        <Text style={styles.loginbtn}> Send Email </Text>
         </TouchableOpacity>
          </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :"center",
        alignItems:"center"
    },

    input:{
        width:300,
        height:55,
        margin:10,
        fontSize : 15,
        fontWeight : 'bold',
        borderBottomColor:'#030303',
        borderBottomWidth: 1,
        marginBottom: 30,
    },

    button:{
        width:300,
        height: 52,
        padding:10,
        borderRadius:10,
        backgroundColor:'#030303',
        alignItems: 'center'
    },

    Regbutton:{
        width:300,
        height:52,
        padding:10,
        borderRadius:10,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        borderWidth : 2,
        borderColor: '#030303'
    },


    loginbtn:{
        color:'#ffff',
        fontSize : 20,
        fontWeight : 'bold'
    },

    loginbtn2:{
        color:'#030303',
        fontSize : 20,
        fontWeight : 'bold'
    },

    logo:{
    width:150,
    height:150
    },

    space: {
        width: 10, 
        height: 10,
      },

      imageStyle: {
        flexDirection:'row',
        justifyContent:'center',
        padding: 5,
        margin: 2,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        marginBottom: 8,
        marginTop : 8,
        alignItems: 'center',
      },
});