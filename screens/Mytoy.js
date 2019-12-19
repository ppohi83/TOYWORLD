import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Mytoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 내 장난감 글쓰기 완료  </Text>
        <Image style={{width:40,height:40}} source={require('../assets/images/Camera.png')}/>
    <Text>카태고리 선탹</Text>
    <Text>제목</Text>
    <Text>가격(선택사항)판매,대여 금액을 정해주세요</Text>
    <Image style={{width:40,height:40}} source={require('../assets/images/판매.png')}/>
    <Image style={{width:40,height:40}} source={require('../assets/images/대여.png')}/>
    <Text>대여기간을 월,주,일로 설정해주세요</Text>
    <Image style={{width:40,height:40}} source={require('../assets/images/일.png')}/>
    <Image style={{width:40,height:40}} source={require('../assets/images/주.png')}/>
    <Image style={{width:40,height:40}} source={require('../assets/images/월.png')}/>
    <Image style={{width:40,height:40}} source={require('../assets/images/전화.png')}/>
    <Text>전화번호 입력(선택사항)</Text>
    <Text>등록하신 위치 주민들에게 홍보하고 싶은</Text>
    <Text>사진이나 내용을 작성해주요</Text>
    <Text>신고가 만힝 들어온 회원일 경우 글쓰기</Text>
    <Text>제한이 걸릴 수 있으니 유의 하시기 바랍니다.</Text>



      </View>
    );
  }
}

