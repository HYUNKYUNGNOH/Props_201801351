import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';
import { useState } from "react";

const Layout = (props) => {
  const {navigation} = props;

  const flexDirectionsArray = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItems = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];

  const [flexDirectionIndex, setFlexDirection] = useState(0);
  const [justifyContentIndex, setJustifyContent] = useState(0);
  const [alignItemIndex, setAlignItem] = useState(0);
  const [wrapIndex, setWrap] = useState(0);
  const [aaa, setDirection] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirectionsArray[flexDirectionIndex],
    justifyContent: justifyContents[justifyContentIndex],
    alignItems: alignItems[alignItemIndex],
    flexWrap : wraps[wrapIndex],
    direction : directions[aaa],
  }  

  const changeSetting = (value, options, setterfunction) => {
    var targetValue = 0;
    if (value == options.length - 1) {
      targetValue = 0;    
    } else {
      targetValue = value + 1;
    }
    setterfunction(targetValue);
    console.log(options[targetValue]);
  };

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor:randomHexColor(),
    };
    return <View style={sqStyle} />;
  };

  const [squares, setSquares] = useState([Square(), Square(), Square()]);


  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace, hookedStyles]}>
      { squares.map(elem => elem) }      
    </View>



    <ScrollView style={[styles.container]}>
      <View style = {[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE FLEX DIRECTION" color = 'black'
            onPress={() => changeSetting(flexDirectionIndex, flexDirectionsArray, setFlexDirection)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE JUSTIFY CONTENT" color = 'black'
            onPress={() => changeSetting(justifyContentIndex, justifyContents, setJustifyContent)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE ALIGN ITEMS" color = 'black'
            onPress={() => changeSetting(alignItemIndex, alignItems, setAlignItem)}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE DIRECTION" color = 'black'
            onPress={() => changeSetting(wrapIndex, wraps, setWrap)}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHAGE FLEX WRAP" color = 'black'
            onPress={() => changeSetting(aaa, directions, setDirection)}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="ADD SQUARE" color = 'black'
            onPress={() => setSquares([...squares, Square()])}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="DELETE SQUARE" color = 'black'
            onPress={() => setSquares(squares.filter((v,i) => i != squares.length - 1))}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="GO TO HOME" color = 'black'
            onPress={() => navigation.navigate('Home')}/>
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
    backgroundColor: 'white',
    borderColor: '#F08080',
    borderWidth: 3

  },
  controlSpace: {
    backgroundColor: '#FFE4E1',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  buttonView: {

    width:'50%',
    padding:10
  }
});

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default Layout;