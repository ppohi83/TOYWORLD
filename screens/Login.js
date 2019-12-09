import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>토이월드는 휴대폰 번호로 가입합니다. </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>번호는 안전하게 보관되며 어디에도 공개되지 않아요 </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>휴대폰 번호를 입력해 주세요 </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>인증문자 받기 </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>인증번호를 입력해주세요 </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>이용약관,개인정보 수집 및 이용 </Text>
       <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>위치정보 이용약관(선택) 에 모두 동의합니다.</Text>
       <NextButton
          title = {'동의'}
          title = {'비동의'}
        />
      </View>
    );
  }
}

       
