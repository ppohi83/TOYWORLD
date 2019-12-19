import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextBox from '../components/TextBox';
import NextButton from '../components/NextButton';

export default class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}/>
        <Image style={{alignSelf:'center',width:110,height:110}}source={require('../assets/images/train.png')}/>
        <View style={styles.a}>
          <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
          <Text style={{fontWeight: 'bold'}}>break8636</Text>
          <Text style={{fontWeight:'bold'}}>관악구 미성동</Text>
          <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/rental.png')}/>
          <Text>조회39</Text>
          <Text>관심0</Text>
          <Text>채팅0</Text>
          <Text>고객만족도</Text>
        </View>
        <Text>토마스와 친구들 원목 기차놀이 세트</Text>
        <Text>대여시 주 4천원 구매시 12만원입니다</Text>

      <NextButton2 title ={'대여 주:4,000원'} />
      <NextButton2 title ={'구매 1120,000원'} />
      <NextButton2 title ={'채팅으로 거래하기'} />
      <NextButton tistle ={'다음 페이지'} />
      

        

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

  
