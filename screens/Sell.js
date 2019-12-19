import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NextButton from '../components/NextButton';

export default class sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
        <Text>Break8636 </Text>
        <Text>펜타스톰 판매합니다 </Text>
        <Text>40,000 </Text>
        <NextButton title = {'판매자와 채팅중입니다'}/>
        <Text>11월13일,7:40pm </Text>
        <Text>같은동네 사시네요.깎아주세요</Text>
        <Text>싫어요 주소 알려주세요</Text>
        <Text>메세지를 입력해주세요</Text>
        NextButton onPress={() => Alert.alert('토이월드에서 내리기 위치에\n엑세스를 허용하시겠습니까?')} title = {'현재 위치로 찾기'}
    );
  }
}
