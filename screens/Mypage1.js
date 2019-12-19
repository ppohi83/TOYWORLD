import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NextButton from '../components/NextButton'


export default class Mypage1 extends Component {
  render() {
    return (
      <View>
        <Text> 내 장난감 글쓰기 </Text>
        <View style={{flex:1,width:100}}>
        <View style={{flex:1,backgroundColor:"gray"}}>
        <Text>보증료를 청구합니다.</Text>
        <Text style={{colorlor:'orange'}}>주의사항</Text>
        <Text style={{colorlor:'orange'}}>보증금을 선택할 수 있으며 보증금은 판매가의 5%로책정선불로 지급하여야 한다.</Text>
        <Text style={{colorlor:'orange'}}>대여 하시다 반납하실 경우 고객이 대여하신 제품은</Text>
        <Text style={{colorlor:'orange'}}>서로 합의하여 택배또는 직접방문하여 반납한다.</Text>
        <Text style={{colorlor:'orange'}}>연장료은 고객과의 합의를 통해 연장신청을 한다.</Text>
        <Text style={{colorlor:'orange'}}>사용기간 종료 전에 유,무선사 고객에게 만료일 통지가 진행되며</Text>
        <Text style={{colorlor:'orange'}}>사용기간 종료 전에 상세페이지에서 반납 요청을 완료해야 한다.</Text>
        <Text style={{colorlor:'orange'}}>계약 만료일 이전까지 고객 상세페이지에서 반납 요청을 하여야 한다.</Text>
        <Text>5%</Text>
        <Text>6,000원</Text>
        <Text>보증료</Text>
        <Text>6,000원/Text>

   <NextButton
         NextButton onPress={() => Alert.alert('대여를 선택하셨습니다 보증료를 청구하시겠습니까?')} 
        />
      </View>
    );
  }
}



    
