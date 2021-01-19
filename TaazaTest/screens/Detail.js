import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet} from 'react-native'


export const Detail = (props) =>{
    console.log(JSON.stringify(props.route.params))
    return(
        <View style = {{alignSelf:'center'}}>
        
        <Text >{`Track name ${props.route.params.trackName}`}</Text>
        <Text >{`Artist name ${props.route.params.artistName}`}</Text>
        <Text >{`Track Price ${props.route.params.trackPrice}`}</Text>
        <Text >{`Release Date ${props.route.params.releaseDate}`}</Text>
        <Text >{`Collection Price ${props.route.params.collectionPrice}`}</Text>
        </View>
    )
}