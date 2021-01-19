import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from 'react'

export const Detail = (props) =>{
    console.log(JSON.stringify(props.route.params))



    function playTrack(url) {
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                SoundPlayer.playUrl(url)
            }else{
                alert("Please check your internet.")
            }
        })
    }

    return(
        <View style = {{alignSelf:'center'}}>
        
        <Text >{`Track name ${props.route.params.trackName}`}</Text>
        <Text >{`Artist name ${props.route.params.artistName}`}</Text>
        <Text >{`Track Price ${props.route.params.trackPrice}`}</Text>
        <Text >{`Release Date ${props.route.params.releaseDate}`}</Text>
        <Text >{`Collection Price ${props.route.params.collectionPrice}`}</Text>

        <Button title='Play Track' onPress={()=>{
            playTrack(props.route.params.previewUrl)
        }}/>
        </View>
    )
}