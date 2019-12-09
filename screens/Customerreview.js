import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Customerreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 고갹 평점은 구매 또는 대여 완료 후 작성 가능하며 </Text>
        <Text> 고객의 신용도를 나타내는 것이므로 신중하게 평가 부탁드립니다 </Text>
        <Text> 고객의 신용도를 나타내는 것이므로 신중하게 평가 부탁드립니다 </Text>
        <Text> 고객의 신용도를 나타내는 것이므로 신중하게 평가 부탁드립니다 </Text>
      </View>
    );
  }
}
