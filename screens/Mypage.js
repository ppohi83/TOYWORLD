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
        <View style={StyleSheet.container}/>
        <ScrollView>
        <Text>마이페이지</Text>
        <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
        <Text style={{fontWeight: 'bold'}}>break8636</Text>
        <Text style={{fontWeight: 'bold'}}>break8636</Text>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/판매내역.png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/구매내역png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/관심내역png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/공지사하png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/내지역설정png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/판매/대여중인 상품png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/키워드 알림png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/채팅내역png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/모아보기png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/친구초대png')}/>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/약관보기png')}/>


      </View>
    );
  }
}
