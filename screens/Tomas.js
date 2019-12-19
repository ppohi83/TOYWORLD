import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet} from 'react-native';
import NextButton from '../components/NextButton';
import NextButton2 from '../components/NextButton2';

export default class Tomas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={StyleSheet.container}>
          <ScrollView>
        <Image style={{alignSelf:'center',width:110,height:110}}source={require('../assets/images/train.png')}/>
        <View style={styles.a}>
        <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
        <Text style={{fontWeight: 'bold'}}>break8636</Text>
        <Text style={{fontWeight: 'bold'}}>break8636</Text>
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/rental.png')}/>
        <Text>조회39</Text>
        <Text>관심0</Text>
        <Text>채팅0</Text>
        <Text>고객만족도</Text>

      </View>
      <Text style={{fontWeight:'bold'}}>토마스와 친구들 원목 기차놀이 세트 대여시 주 4천원 구매시 12만원입니다. </Text>
    
      <NextButton2 title ={' 대여\n주:4000원'} />
        <NextButton2 title ={' 구매\n구매 120,000원'} />
        <NextButton2 title ={' \n채팅으로 거래하기'} />
        <NextButton
          title = {'다음 페이지'}

        />

      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  a: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

})

  