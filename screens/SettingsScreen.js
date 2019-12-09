import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NextButton from'../components/NextButton'

  
  
  
  




export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
        
        <Text style ={{color:'black',textAlign:'center',fontSize:15}}>내 지역 이름(동,읍,면)으로 검색</Text>
        
        
        
      
        <NextButton
          title= {'현재 위치로 찾기'}
        />
      </View>
    );
  }
}
