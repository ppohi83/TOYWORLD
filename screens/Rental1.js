import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Rental extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>펜타스톰 판매합니다.40,00원</Text>
        <Text>팬타스톰 사용감 있구요 일괄 구매시 4마원 대여시 월3천원</Text>
        <Text>토스송금</Text>
        <Text>네이버페이 송금</Text>
        <Text>카카오페이 송금</Text>
        <Text>판매자와 채팅하기</Text>
      </View>
    );
  }
}
