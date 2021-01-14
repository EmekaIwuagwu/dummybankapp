import React, { Component } from 'react';
import { Platform, StyleSheet,Text, View , Image, TextInput, TouchableOpacity, Alert, Linking,AsyncStorage} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
        FullName: '',
        passcode: '',
        email: '',
        Telephone: '',
        BVN : '',
    };
  }

  static navigationOptions = {  
    title: 'Onboarding',  
    headerStyle: {  
        backgroundColor: '#ffff',  
    },  
    //headerTintColor: '#0ff',  
    headerTitleStyle: {  
        fontWeight: 'bold', 
        fontFamily: 'Verdana', 
        fontSize : 14
    },  
};  

SignupAccount = () => {

    const { FullName }  = this.state ;
    const { passcode }  = this.state ;
    const { email }  = this.state ;
    const { Telephone }  = this.state ;
    const { BVN }  = this.state ;
    
    fetch('https://uncoiled-crust.000webhostapp.com/api/onboardingAccountOpening.php',{
        method: 'POST' , 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Fullname: FullName,
          passcode: passcode,
          email : email,
          Telephone : Telephone,
          BVN : BVN
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
  }

  render() {
    return (
      <View>
        <Text style={{margin:10, textAlign:'left',fontSize:40,fontWeight:'bold' ,color: '#030303'}}> Onboarding</Text>
        <ScrollView contentContainerStyle={{ justifyContent: 'space-between',alignItems:'center' }}>
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Name in Full"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Passcode"
        onChangeText={passcode => this.setState({passcode})}
        secureTextEntry={true} 
        keyboardType='numeric'
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Passcode Retype"
        onChangeText={passcode2 => this.setState({passcode2})}
        secureTextEntry={true} 
        keyboardType='numeric'
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Email"
        onChangeText={email => this.setState({email})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Telephone"
        onChangeText={Telephone => this.setState({Telephone})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  BVN"
        onChangeText={BVN => this.setState({BVN})}
        style={styles.input}
        />
        <View style={styles.space} />
         <TouchableOpacity onPress={() => {this.SignupAccount();}} style={styles.Regbutton}>
        <Text style={styles.loginbtn2}> Open Account! </Text>
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
        fontFamily : 'Nunito',
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
