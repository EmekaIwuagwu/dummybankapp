import React, { Component } from 'react';
import { Platform, StyleSheet,Text, View , Image, TextInput, TouchableOpacity, Alert, Linking, Dimensions, FlatList, AsyncStorage} from 'react-native';

export default class Home extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      AccountNum : '',
      Fullname : '',
      email : '',
      Telephone : '',
      balance : '',
      user : ''
    };
  }

  onclick_item(key)
  {
      switch(key)
      {
          case "BVN":
             this.props.navigation.navigate('bvn',{AccountNum : this.state.AccountNum});
              break;
          case "Transfers":
                this.props.navigation.navigate('Transfers',{AccountNum: this.state.AccountNum});
                break;
          case "Bill Payments":
            this.props.navigation.navigate('BillPayments');
                break;
          case "Checkbook Requests":
                this.props.navigation.navigate('CheckBookRequest');
                break;
          case "Airtime Purchase":
                this.props.navigation.navigate('AirtimePurchase');
                break;
          case "Contact Us":
                this.props.navigation.navigate('Contact');
                break;
      }
  }


  componentDidMount()
  {
    this.getAccountDetails();
  }

  getAccountDetails = () =>
  {
    const {navigation} = this.props;
    const AccountNum = navigation.getParam('user','NO-User');
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

  numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  render() {
      //const {navigation} = this.props;
      //const username = navigation.getParam('user','NO-User');
    return (
      <View>
        <Text style={styles.welcomeText}> Welcome , {this.state.Fullname}!  - {this.state.AccountNum}  </Text>
        <Text style={styles.balanceText}> ₦ {this.numberWithCommas(this.state.balance)} </Text>
        <View
        style={{
            borderBottomColor: '#696b69',
            borderBottomWidth: 1,
         }}
        />
        <View>
        <Text style={styles.MenuText}> Menu </Text>
        <View style={styles.space} />
            <FlatList 
            const data  = {[
                {key : 'BVN'},
                {key: 'Transfers'},
                {key: 'Bill Payments'},
                {key: 'Checkbook Requests'},
                {key: 'Airtime Purchase'},
                {key: 'Contact Us'},
            ]}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() =>this.onclick_item(item.key)} style={styles.button}>
            <View style ={styles.item}>
                <Text style = {styles.itemText} >{item.key}</Text>
            </View>
                </TouchableOpacity>
              )}
              numColumns = '2'
            />
        </View>
        <View style={styles.space} />
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
        fontSize : 15,
        fontFamily : 'Nunito-Bold',
        fontWeight : 'bold',
        flexDirection : 'row'
    },

    space: {
        width: 10, 
        height: 10,
      },

    balanceText:{
        margin : 10,
        fontSize : 28,
        fontFamily : 'Nunito-Bold',
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
        borderRadius : 20,
        alignItems: 'center',
        justifyContent : 'center',
        flex : 1,
        margin : 1,
        height : Dimensions.get('window').width / 3
      },
      itemText:{
        color: '#fff',
        fontSize : 14,
        fontWeight :'bold',
        fontFamily : 'Nunito-Bold'
      },
      button:{
        backgroundColor : '#030303',
        borderRadius : 225,
        alignItems: 'center',
        justifyContent : 'center',
        flex : 1,
        margin : 1,
        height : Dimensions.get('window').width / 3
      }

});