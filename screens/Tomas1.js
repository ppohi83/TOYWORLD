import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NextButton from '../components/NextButton';


export default class Tomas1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>break8636 </Text>
        <Text>관악구 미성동</Text>
        <Text>조회39</Text>
        <Text>관심0</Text>
        <Text>채팅0</Text>
        <Text>토마스와 친구들</Text>
        <Text>4,000원</Text>
        <Text>대여하기를 선택하셨습니다.</Text>
        <Image style={{width:120,height:120}}source={require('../assets/images/train.png')}/>
        <Text>토마스와 친구들 원목 기차놀이 세트 </Text>
        <Text>대여시 주 4천원 구매시 12만원입니다. </Text>
        <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
        <Text>판매자정보:break8636</Text>
        <Text>대여.기간[주].금액[4000원]</Text>
        <Text>장소:관악구 미성동</Text>
        <Text>토이월드에 등록된 판매상품과 상품의 내영은 판매자가 등록한 것으로 </Text>
        <Text>토이월드는 등록된 내용에 대하여 일체의 책임을 지지 않습니다 </Text>
        <NextButton title = {'다음'}/>
        
        

        

      </View>
    );
  }
}


