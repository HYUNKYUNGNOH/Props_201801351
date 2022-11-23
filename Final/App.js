import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';
const App = () => {
  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      <Text>글을 씁니다.</Text>
      <Text>글을 또 씁니다.</Text>
      
      <Image source={require('./assets/favicon.png')}/>
      <ImageBackground
        style={{width:200, height:200}}
        source={{
          uri: 'https://postfiles.pstatic.net/MjAyMjExMjNfMjY3/MDAxNjY5MTk5OTU3MjM1.89XEFOF2hcbL73PQ_kYQFl1WmRMvVO4vcwwerO6_1Jog.oGz08RdQqYCdTs_QkVfFF7VeHHg5Qd6hIui1TSkB18Qg.JPEG.shgusrud0910/IMG_5484.jpg?type=w966',
        }}
      > 
        <Text>
        몰티즈는 몰타 섬이 고향으로 알려진 소형견으로 앙증맞은 외모와 애교 넘치는 성격, 흰 털로 많은 사랑을 받는 반려견이다. 한국에서 가장 많은 사람들이 키우는 반려견으로 ‘국민 강아지’로 통하기도 한다. 흰색 털이 변색될 수 있으며 특히 눈가의 털색이 갈색으로 변색될 수 있는데 이는 눈물자국 때문이다. 눈물자국을 방치하면 세균이 증식해 피부병의 원인이 될 수 있다. 털을 자주 관리해주지 않으면 엉키거나 끝이 갈라지는 등의 문제가 생길 수도 있다. 활발한 성격 때문에 산책을 좋아한다. 다정다감한 성격 때문에 배변 교육 등 반려견 교육도 잘 받을 수 있다.


        </Text>
      
      </ImageBackground>
    </View>
    <ScrollView style={[styles.container]}>
      <View style = {[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE FLEX DIRECTION" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE JUSTIFY CONTENT" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE ALIGN ITEMS" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE DIRECTION" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHAGE FLEX WRAP" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="ADD SQUARE" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="DELETE SQUARE" />
        </View>
      </View>

    </ScrollView>
  </>);
}
const styles = StyleSheet.create({
  container: {
    height: '50%'
  },
  playingSpace: {
    backgroundColor: 'pink',
    borderColor: 'skyblue',
    borderWidth: 3
  },
  controlSpace: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonView: {
    width:'50%',
    padding:10
  }
});
export default App;