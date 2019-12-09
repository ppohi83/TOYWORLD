import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Nextpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 토마스와 친구들 원목 기차놀이 세트</Text>
        <Text> 대여시주 4천원 구매시 12만원 입니다.</Text>
        <Text> 대여주:4,000원 구매:120,000원 채팅으로 거래하기</Text>
      </View>
    );
  }
}


