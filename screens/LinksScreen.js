import React, { Component } from 'react';
import { View,Text, Image} from 'react-native';
import NextButton from '../components/NextButton'


export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image style={{alignSelf:'center',width:110,height:110}}source={require('../assets/images/toy.png')}/>
        <Image style={{alignSelf:'center',width:240,height:240}}source={require('../assets/images/village.png')}/>
        <Text style ={{color:'darkorange' ,textAlign:'center',fontSize:30, margin: 40}}>우리 지역 장난감 대여하기</Text>
        <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>토이 월드는 가장 가까운 지역부터 </Text>
        <Text style ={{color:'darkorange' ,textAlign:'center',fontSize:20}}>검색을 시작합니다. </Text>
        <Text style ={{color:'darkorange',textAlign:'center',fontSize:20, marginBottom: 50}}>내 동네를 설정해주세요 </Text>
      
        <NextButton
          title = {'내 지역 설정하고 시작하기'}
        />
      </View>
    );
  }
}

       
