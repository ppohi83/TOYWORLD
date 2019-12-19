import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

export default class Ganakgu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}/>
      <ScrollView>
        <View style={styles.a}>
        <Image style={{width:40,height:40}} source={require('../assets/images/person.png')}/>
        <Text style={{fontWeight:'bold'}}>관악구 미성동</Text>
        <Text style={{fontWeight:'bold'}}>고객 평점</Text>
        <Text styke={{fontWeight:'bold'}}>즐겨찾기 완료</Text>
        <Image style={{width:120,height:120}}source={require('../assets/images/Bookmark.png')}/>
        <Image style={{width:120,height:120}}source={require('../assets/images/Kakao.png')}/>
        <Image style={{width:120,height:120}}source={require('../assets/images/Pen.png')}/>
        <Text style={{fontWeight:'bold'}}>즐겨찾기</Text>
        <Text style={{fontWeight:'bold'}}>리뷰</Text>
        <Text style={{fontWeight:'bold'}}>글쓰기</Text>
        <Text style={{fontWeight:'bold'}}>글쓰기</Text>
        <Text style ={{color:'orange',textAlign:'center',fontSize:20}}>고객 평점은 구매 또는 대여 완료 후 작성 가능하며</Text>
        <Text style ={{color:'orange',textAlign:'center',fontSize:20}}>고객의 신용도를 나타내는 것이므로 신중하게 평가 부탁드립니다.</Text>
        <Text style ={{color:'black',textAlign:'center',fontSize:20}}>고객평점</Text>
        <Text style ={{color:'black',textAlign:'center',fontSize:20}}>손가락으로 고객 평점을 해주세요</Text>
        <Text style ={{color:'black',textAlign:'center',fontSize:20}}>평점은 고객 신용도를 나타냅니다.</Text>



        
    