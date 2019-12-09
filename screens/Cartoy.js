import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Cartoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 펜타스톰 사용감 있구요 일괄 구매시 4만원 대여시 월 3천원 </Text>
        <Text> 대여 월:3,000원 구매:40,000원 채팅으로 거래하기 </Text>
        <Text> 구매 40,000원 </Text>
        <Text>채팅으로 구매하기</Text>
      </View>
    );
  }
}
