import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View style={styles.container}/>
        <ScrollView>
          <View style={styles.container}>
          <Image style={{width:40,height:40}} source={require('../assets/images/Toys.png')}/>
          <Text>토이스</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Toys1.png')}/>
          <Text>인기매몰</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Disneytoys.png')}/>
          <Text>디즈니 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Robottoys.png')}/>
          <Text>로봇 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Blocktoys.png.png')}/>
          <Text>블록 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Movetoys.png')}/>
          <Text>움직이는 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Iqtoys.png')}/>
          <Text>지능발달 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Talktoys.png')}/>
          <Text>말하는 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Fishing.png')}/>
          <Text>낚시 장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Puzzle.png')}/>
          <Text>퍼즐장난감</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Count.png')}/>
          <Text>숫자놀이</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/English.png')}/>
          <Text>영어공부</Text>
          <Image style={{width:40,height:40}} source={require('../assets/images/Etc.png')}/>
          <Text>기타</Text>
