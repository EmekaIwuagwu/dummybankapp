import React, { Component } from 'react';
import { Platform, StyleSheet,Text, View , Image, TextInput, TouchableOpacity, Alert, Linking, Dimensions, FlatList, AsyncStorage} from 'react-native';

export default class bvn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountNum : '',
      BVN : ''
    };
  }

  DisplayBVNAlertBox = async() =>
  {
    let AccountNum = await AsyncStorage.getItem('user');
    alert("Hi "+AccountNum);
  }

  componentDidMount()
  {
    this.ShowBVN();
  }

  ShowBVN = async() =>
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
          this.setState({BVN:responseJson[0].BVN});
          alert(this.state.BVN)
      })
  }

  render() {
    return (
      <View>
          <Text style={styles.balanceText}> Your BVN is : {this.state.BVN}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MenuText :{
      margin : 10,
      fontSize : 27,
      fontFamily : 'Verdana',
      fontWeight : 'bold',
      flexDirection : 'row'
  },

  welcomeText :{
      margin : 10,
      fontSize : 26,
      fontFamily : 'Verdana',
      fontWeight : 'bold',
      flexDirection : 'row'
  },

  space: {
      width: 10, 
      height: 10,
    },

  balanceText:{
      margin : 10,
      fontSize : 25,
      fontFamily : 'Verdana',
      fontWeight : 'bold'
  },
  accountNumText :{
      margin : 10,
      fontSize : 13,
      textAlign : 'right',
      fontFamily : 'Verdana',
      fontWeight : 'bold'
  },
  container:{
      flex :1,
      marginVertical :20
  },
  item : {
      backgroundColor : '#030303',
      borderRadius : 10,
      alignItems: 'center',
      justifyContent : 'center',
      flex : 1,
      margin : 1,
      height : Dimensions.get('window').width / 3
    },
    itemText:{
      color: '#fff'
    },
    button:{
      backgroundColor : '#030303',
      borderRadius : 35,
      alignItems: 'center',
      justifyContent : 'center',
      flex : 1,
      margin : 1,
      height : Dimensions.get('window').width / 3
    }

});
