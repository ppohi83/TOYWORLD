import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>기간선택(월 기준 최소 1주) </Text>
        <Text>손가락으로 이동시켜 대여기간을 설정 </Text>
        <Text>4주를 선택하셨습니다. </Text>
        <Text>4주를 선택하셨습니다. </Text>
        <Text>보증료 </Text>
        <Text>보증료는 판매가의 5%가 청구되며 판매자가 보증료를 관리합니다 </Text>
        <Text>보증료는 판매가의 5%가 청구되며 판매자가 보증료를 관리합니다 </Text>
        <Text>판매가 120,000원</Text>
        <Text>보증료5%</Text>
        <Text>6,000원</Text>
        <Text>보증료를 선택하셨습니다 판매가 120,000원의 5%가 합산 딥니다</Text>
        <Text>대여요금 16,000원</Text>
        <Text>보증료 6,000원</Text>
        <Text>결제금액 24,000원</Text>
        
        

      </View>
    );
  }
}
