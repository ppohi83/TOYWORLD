import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import NextButton2 from '../components/NextButton2'


export default class Gurodong extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      
        <View style={styles.aaa}>
        <Text>대여하기를 선택하셨습니다.</Text>
          <Text style={{fontWeight: 'bold'}}>팬타스톰 사용감 있구요 일괄구매시 4만원 대여시 월3천원</Text>
          <NextButton2
          title = {'대여 월:3,000원'}/>
          <NextButton2
          title = {'구매 40,000원'}/>
        </View>
      
   
        <View style={styles.aaa}>
          <Image style={{width:120,height:120}}source={require('../assets/images/train.png')}/>
          <Text> 토마스와 친구들 원목 기차놀이 세트</Text>
          <NextButton2
          title = {'대여 주:4,000원'}/>
          <NextButton2
          title = {'구매 120,000원'}/>
        </View>

        <View style={styles.aaa}>
            <Image style={{width:120,height:120}}source={require('../assets/images/princess.png')}/>
              <Text>디즈니 프린세스 엘레나 1만원 급처</Text>
              <NextButton2
             title = {'희망사항없음'}/>
             <NextButton2
             title ={'구매10,000원'}/>

        </View>
      
        
        <View style={styles.aaa}>
          <Image style={{width:120,height:120}}source={require('../assets/images/robot.png')}/>
            <Text>헬로카봇 상태 A급</Text>
            <NextButton2
            title={'대여 주:1,000원'}/>
            <NextButton2
            title={'구매50,000원'}/>
        </View>

          

      </View>
      
    
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  aaa: {
    flexDirection: 'row',
  }
})
