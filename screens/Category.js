import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 펜타스톰 사용감 있구요 일괄 구매시 4만원 대여시 월3천원 </Text>
        <Text> 토마스와 친구들 원목 기차놀이 세트 </Text>
        <Text> 디즈니 프린세스 엘레나 1만원 급처 </Text>
        <Text> 헬로카봇 상태A급 </Text>
      </View>
    );
  }
}
