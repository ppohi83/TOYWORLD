import React, { Component } from 'react';
import { Modal,View, Text } from 'react-native';
import NextButton from '../components/NextButton'

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>내 지역 이름(동,읍,면)으로 검색</Text>
        <NextButton
         NextButton onPress={() => Alert.alert('토이월드에서 내리기 위치에\n엑세스를 허용하시겠습니까?')} title = {'현재 위치로 찾기'}
        />
      </View>
    );
  }
}

       
