import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
        <Text style={{color:'black',textAlign:'center',fontSize:20}}>고객 평점은 구매 또는 대여 완료 후 작성 가능하며</Text>
        <Text style={{color:'black',textAlign:'center',fontSize:20}}>고객의 신용도를  나타내는 것이므로 신중하게 평가부탁드립니다.</Text>
        <Text style={{color:'black',textAlign:'center',fontSize:20}}>손가락으로 고객 평저을 해주세요</Text>
        <Text style={{color:'black',textAlign:'center',fontSize:20}}>평점은 고객 신용도를 나타냅니다.</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>즐겨찾기</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>리뷰</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>글쓰기</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>고객평점</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>손가락으로 고객 평점을 해주세요</Text>
        <Text style={{color:'black',textAlign:'left',fontSize:20}}>평점은 고객 신용도를 나타냅니다.</Text>
               
               


        
        })
        


      </View>
    );
  }
}

