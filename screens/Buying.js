import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Buying extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>팬타스톰 판매합니다.40,000원 </Text>
        <Text>팬타스톰 사용감 있구요.일괄 구매시 4만원 대여시 월3천원</Text>
        <Text>toss 토스 송금 네이버송금 카</Text>
      </View>
    );
  }
}
