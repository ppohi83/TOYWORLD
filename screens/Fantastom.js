import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,Image, Alert} from 'react-native';
import NextButton2 from '../components/NextButton2';
import NextButton from '../components/NextButton';


export default class Fantastom extends Component {
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
       <Text>펜타스톰 사용감 있구요 일괄 구매시 4만원 대여시 월 3처원</Text>

      <NextButton2 title ={'토스송금'} />
      <ScrollView>
              {{text: 'OK', onPress: () => Alert.alert('즐겨찾기를 완료했습니다.')
          
              
              
        <NextButton title ={'대여 월:3,000원'}/>
        <NextButton title = {'구매:40,000원'}/>
        <NextButton title = {'채팅으로 거래하기'}/>
        <NextButton title = {'다음 페이지'}/>


        

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

  
