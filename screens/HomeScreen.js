import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      <Text style ={{color:'red',textAlign:'center',fontSize:20}}>TOYWORLD </Text>
    </View>
    );
  }
}


