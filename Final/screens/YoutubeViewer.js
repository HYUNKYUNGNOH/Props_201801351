import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground, Alert, TextInput } from "react-native";
import Constants from 'expo-constants';
import {useState, useCallback} from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const YoutubeViewer = (props) => {
    const [playing, setPlaying] = useState(false);
    const [playingVideoId, setPlayingVIdeoId] = useState("xTY0SlyVfCQ"); 
    const [text, onChangeText] = React.useState("xTY0SlyVfCQ");
  
    const onStateChange = useCallback ((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
        }, []);

        const togglePlaying = useCallback(() => {
            setPlaying((prev) => !prev);

        }, []);
        
    
    return(
        <ScrollView>
            <YoutubePlayer
            height={300}
            play={playing}
            videoId={playingVideoId}
            onChangeState={onStateChange}

            />
            <Button title = {playing ? "pause" : "play"} onPress={togglePlaying} />
      <TextInput
      style={styles.input} 
      onChangeText = {setPlayingVIdeoId}
      value={playingVideoId}
      />

      </ScrollView>
    )
         
    }

    const styles = StyleSheet.create({
        input: {
        heigt:45,
        margin:12,
        borderWidth: 1,
        padding: 10,
        },
    })
export default YoutubeViewer