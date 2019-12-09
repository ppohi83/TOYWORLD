import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Rentalcareful extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 대여시 주의사항 </Text>
        <Text> 제1조 </Text>
        <Text> 토이월등 등록된 판매상품과 상품의 내용은 판매자가 등록한 것으로 토이월드는 등록된 내용에 대하여 일체의 책임을 지지 않습니다 </Text>
        <Text>제2조</Text>
        <Text>계약은 본 회사에서 물품을 선택하고 결제를 완료한 시점부터 효력이 발생한다</Text>
        <Text>계약기간의 시작은 고객이 상품을 수령한 시점으로 한다</Text>
        <Text>대여일은 고객이 선택 한 날짜기준이며 효력이 발생한 날로부터 각 일,주,월을 기준을 한다</Text>
        <Text>배송 지연 등의 사유로 인해 일어난 문제는 채팅기능으로 협의한다</Text>
        <Text>고객은 물곤울 벋운 후 버로 확인하여 부품 누락,고장 등으로 사용이 불가능한 경우 채팅기능으로 합의를 합니다.</Text>
        <Text>판매자의 과실로 왕복배송비 부담은 고객에게 있으며 사용기간에 포함된다.</Text>
        <Text>고객이 정한 사용 가능한 물건에 대한 사용료를 납부해야 한다.</Text>
        <Text>대여 하시다 반납 하실 경우 고객이 대여하신 제품은 서로 합의하여 택배또는 직접방문하여 반납한다.</Text>
        <Text>사용 기간 종료 전에 유, 무선상 고객에게 만료일 통지가 진행되며 재계약을 원하지 않을경우계약 만료일 이전까지.</Text>
        <Text>고객의 채팅창에 상세페이지에서 반납요청을 완료해야 한다.</Text>
        
      </View>
    );
  }
}
