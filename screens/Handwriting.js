import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Handwriting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 내 장난감 글쓰기 </Text>
        <Text> 보증료를 청구합니다. </Text>
        <Text> 주의사항 </Text>
        <Text> 보증금을 선택 할 수 있으며 보증금은 판매가의 5%로 책정 선불로 지급하여야 한다. </Text>
        <Text> 대여 하시다 반납 하실 경우 고객이 대여하신 제품은 서로 합의하여 택배또는 직접방문하여 반납한다. </Text>
        <Text> 연장료는 고객과의 합의를 통해 연장신청을 한다(채팅기능으로 합의). </Text>
        <Text> 사용 기간 종료 전에 유,무선상 고객에게 만료일 통지가 진행되며 </Text>
        <Text> 재계약을 원하지 않을 경우계약 만료일 이전까지 고객의 채팅창에  </Text>
        <Text> 상세페이지에서 반납요청을 완료해야 한다  </Text>
        <Text> 계약 만료일 이전까지 고객 상세페이지 에서 반납요청을 하여야 한다 </Text>
        <Text> 보증료는 판매가의 5%가 청구되며 판매자가 보증료를 관리합니다 </Text>
        <Text> 판매금액 120,000원 </Text>
        <Text> 5% 6,000원 </Text>
        <Text> 보증료  6,000원 </Text>
      </View>
    );
  }
}
