import React from "react";
import {Image, Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
    return (
        <View style={styles.container}>

            <Text style={styles.textStyle}>
                <>이름: 노낑깡</>{"\n"}
                <>나이: 1살</>{"\n"}
                <>성별: 남</>
            </Text>

      

            <Image 
                source={require('../assets/IMG_5484.jpg')}
                style={{width:300,height:300}}    
            />
            <TouchableOpacity
                style={styles.buttoneContainer}
                onPress={() => navigation.navigate('Layout')}
            >
                <Text style={styles.buttonTest}>Go To Layout</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFACD'
    },
    buttoneContainer:{
        backgroundColor:'orange',
        borderRadius:5,
        padding:10,
        margin:20

    },
    buttonTest:{
        fontSize:20,
        color:'#fff'

    },
    textStyle:{
        marginBottom:20 ,
        fontSize:20, 
        fontWeight:'bold', 
        color:'#228B22',
        textAlign: 'left'
    }
})
export default Home