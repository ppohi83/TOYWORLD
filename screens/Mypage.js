import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>마이페이지 </Text>
        <Text>프로필 보기 </Text>
        <Text>판매내역 </Text>
        <Text>구매내역 </Text>
        <Text>관심목록 </Text>
        <Text>공지사항 </Text>
        <Text>내 지역 설정 </Text>
        <Text>판매/대여중인 상품 </Text>
        <Text>키워드 알림</Text>
        <Text>채팅내역</Text>
        <Text>모아보기</Text>
        <Text>친구초대</Text>
        <Text>약관보기</Text>
      </View>
    );
  }
}
