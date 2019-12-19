import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class TextBox extends Component {
    static defaultProps = {
        title: 'Button',
        onPress: () => {},
        color: 'white'
    };

    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 50, borderColor:'black', borderWidth:1}}
          placeholder="휴대폰 번호를 입력해주세요"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize:50}}>
        </Text>
      </View>
    );
  }
}