import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity, Alert, Linking, AsyncStorage} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';

export default class SwiftTransfers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountNum : '',
      Fullname : '',
      email : '',
      Telephone : '',
      balance : '',
      user :''
    };
  }

  componentDidMount()
  {
    this.ShowAccount();

  }

  ShowAccount = async() =>
  {
    //const {navigation} = this.props;
    //const AccountNum = navigation.getParam('user','NO-User');
    let AccountNum = await AsyncStorage.getItem('user');
   var searchAPIURL = 'https://uncoiled-crust.000webhostapp.com/api/searchData.php?AccountNum='+AccountNum;
     var header = {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
     };

     fetch(
         searchAPIURL,
         {
             method : 'GET',
             headers : header
         }
     ).then((response) => response.json())
      .then((responseJson)=> {
          this.setState({Fullname:responseJson[0].Fullname});
          this.setState({balance:responseJson[0].balance});
          this.setState({AccountNum:responseJson[0].AccountNum});
      })
  }


  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{ justifyContent: 'space-between',alignItems:'center' }}>
        <Picker style={{width:'85%', width: 300, height: 55, fontSize: 19, fontWeight:'bold', borderColor: '#030303', borderBottonWidth:1}}
        selectedValue={this.state.accNum}
        onValueChange={(itemValue,itemIndex) => this.setState({accNum:itemValue})}
        >
        <Picker.Item label="Select Account Number" value="accNum" />
        <Picker.Item label={this.state.AccountNum} value={this.state.AccountNum} />
        </Picker>

        <View style={styles.space2} />
        <TextInput
        placeholder = " Beneficiary Account"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Beneficiary Name"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Amount"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Telephone"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Beneficiary Address"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " BIC / SWIFT"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Description"
        onChangeText={FullName => this.setState({FullName})}
        style={styles.input}
        />
        <TouchableOpacity onPress={() => {DummyLogin();}} style={styles.button}>
        <Text style={styles.loginbtn}> Send </Text>
         </TouchableOpacity>
         <View style={styles.space} />
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
