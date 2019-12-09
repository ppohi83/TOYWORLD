import React, { Component } from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
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
       <Text style ={{color:'darkorange' ,textAlign:'center',fontSize:20}}>검색을 시작합니다. </Text>
        <Text style ={{color:'darkorange',textAlign:'center',fontSize:20}}>내 동네를 설정하세요. </Text>
      
        <NextButton
          title = {'내 지역 설정하고 시작하기'}
        />
      </View>
    );
  }
}

       
