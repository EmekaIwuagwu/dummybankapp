import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AirtimePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ServiceAvailableShortly = () =>
  {
    alert('Service will be Available Shortly');
  }

  componentDidMount()
  {
    this.ServiceAvailableShortly();
  }

  render() {
    return (
      <View>
        <Text> Service will be Available Shortly </Text>
      </View>
    );
  }
}
