import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import NextButton from '../components/NextButton';
import SmsButton from '../components/SmsButton'
import TextBox from '../components/TextBox';
import TextBox2 from '../components/TextBox2';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View>
       <Image style={{alignSelf:'center',width:110,height:110}}source={require('../assets/images/bear.png')}/>
       <Text style ={{color:'darkㄴorange',textAlign:'center',fontSize:20}}>토이월드는 휴대폰 번호로 가입합니다.번호는 안전하게 보관되며 어디에도 공개되지 않아요. </Text>
       <TextBox />
       <SmsButton title ={'인증문자 받기'} />
       <TextBox2 />
       <NextButton title = {'동의'}/>
       <NextButton title = {'비동의'}/>
      </View>
    );
  }
}

       
