import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NextButton from '../components/NextButton'

export default class Mydong extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style ={{color:'black',textAlign:'left',fontSize:20, marginBottom: 30}}>내 지역 이름(동,읍,면)으로 검색 </Text>
        <NextButton title={'현재 위치로 찾기'}/>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>주변지역 </Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 구로구 구로제2동 </Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 금천구 가산동 </Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 금천구 독산제1동 </Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 구로구 구로제 2동 </Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 동작구 신대방제1동</Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 동작구 신대방제1동</Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 영등포구 대림동</Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 관악구 조원동</Text>
        <Text style ={{color:'black',textAlign:'left',fontSize:20}}>서울 구로구 구로제4동</Text>
      </View>
    );
  }
}

       
