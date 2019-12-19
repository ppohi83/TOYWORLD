import React, { Component } from 'react';
import { View, Text, Image, ScrollView,StyleSheet, Alert} from 'react-native';
import NextButton from '../components/NextButton';
import NextButton2 from '../components/NextButton2';


export default class Cartoy extends Component {




  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image style={{alignSelf:'center',width:500,height:300}}source={require('../assets/images/cartoy.png')}/>
        <View style={styles.a}>
        <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
        <Text style={{fontWeight:'bold'}}>관악구 미성동</Text>

        
      
        
      
      
    
        <Image style={{alignSelf:'center',width:40,height:40}} source={require('../assets/images/rental.png')}/>
        <Text>조회39</Text>
        <Text>관심0</Text>
        <Text>채팅0</Text>
        <Text>고객만족도</Text>
       
        </View>
        <Text style={{fontWeight:'bold'}}>펜타스톰 사용감 있구요 일괄 구매시 4만원 </Text>
        
        
      
        
        
        <NextButton2 title ={' 대여\n월 3000원'} />
        <NextButton2 onPress={() => Alert.alert('구매하기를\n선택하셨습니다.')} title ={'  구매\n구매 40,000원'} />
        <NextButton2 title ={'  \n채팅으로 거래하기'} />
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
