import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

 function Lotto ({navigation}){

  const [lotto, setlotto] = useState([]); 

  function makelotto(){
    let i = 0; 
    let lnumber = [];
    let rnumber = 0; 

    let lottos = []; 
    let a = 0; 

    for(i=1; i<=45; i++){
        lottos.push(i); 
    }
    
    for(i=0; i<=44; i++){
      rnumber = Math.floor(Math.random()*45);   
      
      a = lottos[i]; 
      lottos[i] = lottos[rnumber];
      lottos[rnumber] = a;
    }

    console.log(lottos); 

        for(i=0; i<6; i++){                
        lnumber.push(lottos[i]);
    }
   
    setlotto(lnumber);  
  }

  useEffect( ()=>{
    makelotto(); 
  },[]); 

  return (
    <View style={styles.container}>
         <Image 
                source={require('../assets/game-show.png')}
                style={{width:250,height:250}}    
            />

      <Text style={{marginBottom:20, fontSize:25, fontWeight:'bold',color:'pink' }}> 로또번호 만들기</Text>
      <Button color ='yellow' title={'☞  CLICK HERE  ☜'} onPress={()=>makelotto()} /> 
      <Text style={{fontSize:50, color:'white' }}> {lotto.toLocaleString()} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Lotto