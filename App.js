import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Splash from './src/Splash';
import Login from './src/Login';
import Home from './src/Home';
import Transfers from './src/Transfers';
import CheckBookRequest from './src/CheckBookRequest';
import SwiftTransfers from './src/SwiftTransfers';
import BillPayments from './src/BillPayments';
import bvn from './src/bvn';
import Contact from './src/Contact';
import Onboarding from './src/Onboarding';
import AirtimePurchase from './src/AirtimePurchase';

logoutApp = async() => {
  await AsyncStorage.clear();
  this.props.navigation.navigate('Login');
};

const HomeNavigator = createStackNavigator({
  'Home': {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const OnboardingNavigator = createStackNavigator({
  'Onboarding': {
    screen: Onboarding,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.goBack()}>
          <Icon name="left-arrow" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const BVNNavigator = createStackNavigator({
  'BVN': {
    screen: bvn,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const AirtimePurchaseNavigator = createStackNavigator({
  'Airtime Purchase': {
    screen: AirtimePurchase,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const TransfersNavigator = createStackNavigator({
  'Transfers': {
    screen: Transfers,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const ContactUsnavigator = createStackNavigator({
  'Contact Us': {
    screen: Contact,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const CheckBookRequestNavigator = createStackNavigator({
  'Checkbook Request': {
    screen: CheckBookRequest,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const BillPaymentsNavigator = createStackNavigator({
  'Bill Payments': {
    screen: BillPayments,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const SWIFTPaymentsNavigator = createStackNavigator({
  'SWIFT Payments': {
    screen: SwiftTransfers,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const LogoutNavigator = createStackNavigator({
  'Log In': {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() =>
            this.logoutApp()
            //this.props.navigation.navigate('Login')
          }></TouchableOpacity>
      ),
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Overview',
    },
    screen: HomeNavigator,
  },

  bvn: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/checked.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'BVN',
    },
    screen: BVNNavigator,
  },

  Transfers: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/credit-card.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Transfers',
    },
    screen: TransfersNavigator,
  },


  SwiftPayments: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/worldwide.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'SWIFT Payments',
    },
    screen: SWIFTPaymentsNavigator,
  },

  AirtimePurchase: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/cart.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Airtime Purchase',
    },
    screen: AirtimePurchaseNavigator,
  },

  CheckBookRequest: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/checkbook.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Checkbook Request',
    },
    screen: CheckBookRequestNavigator,
  },

  BillPayments: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/receipt.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Bill Payments',
    },
    screen: BillPaymentsNavigator,
  },

  Contact: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/contact.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Contact Us',
    },
    screen: ContactUsnavigator,
  },

  Logout: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/logout.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Logout',
    },
    screen: LogoutNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Onboarding : {screen : Onboarding},
    Drawer: {screen: DrawerNavigator},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(AppSwitchNavigator);

export default App;