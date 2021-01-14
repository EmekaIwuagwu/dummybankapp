import React, { Component } from 'react';
import { Platform, StyleSheet,Text, View , Image, TextInput, TouchableOpacity, Alert, Linking,AsyncStorage} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';

export default class CheckBookRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountNum : '',
      fullname : '',
      address : '',
      email : '',
      telephone : '',
      balance : '',
      amount : '',
      dl: '',
      nationalID : '',
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

  FunctionSaveCheckBookRequest = () =>{

    const { fullname }  = this.state ;
    const { address }  = this.state ;
    const { telephone }  = this.state ;
    const { email }  = this.state ;
    const { dl }  = this.state ;
    const { nationalID }  = this.state ;

    fetch('https://uncoiled-crust.000webhostapp.com/api/saveCheckRequest.php',{
      method: 'POST' , 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: fullname,
        address: address,
        telephone : telephone,
        email : email,
        dl : dl,
        nationalID : nationalID
          })
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson ==='OK')
        {
          Alert.alert('Ticket Reserved');
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
        <Picker style={{width:'85%', width: 300, height: 55, fontSize: 19, fontWeight:'bold', borderColor: '#030303', borderBottonWidth:1}}
        selectedValue={this.state.accNum}
        onValueChange={(itemValue,itemIndex) => this.setState({accNum:itemValue})}
        >
        <Picker.Item label="Select Account Number" value="accNum" />
        <Picker.Item label={this.state.AccountNum} value={this.state.AccountNum} />
        </Picker>
        <View style={styles.space2} />
        <TextInput
        placeholder = " Account Holder Name in Full"
        onChangeText={fullname => this.setState({fullname})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder = " Address in Full"
        onChangeText={address => this.setState({address})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = "  Telephone"
        onChangeText={telephone => this.setState({telephone})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Email "
        onChangeText={email => this.setState({email})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " Drivers license #"
        onChangeText={dl => this.setState({dl})}
        style={styles.input}
        />
        <View style={styles.space2} />
        <TextInput
        placeholder = " National ID Number"
        onChangeText={nationalID => this.setState({nationalID})}
        style={styles.input}
        />

        <TouchableOpacity onPress={() => {this.FunctionSaveCheckBookRequest();}} style={styles.button}>
        <Text style={styles.loginbtn}> Submit </Text>
         </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    input:{
        width:300,
        height:55,
        margin:10,
        fontSize : 19,
        fontWeight : 'bold',
        borderBottomColor:'#030303',
        borderBottomWidth: 1,
        marginBottom: 30,
    },

    button:{
        width:300,
        height:52,
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

    AccountBalance:
    {
        fontSize : 13,
        fontWeight : 'bold',
        textAlign : 'left'
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
        height: 20,
      },

    space2:{
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