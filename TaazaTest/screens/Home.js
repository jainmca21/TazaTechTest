import React, {useEffect, useState} from 'react'
import { View ,Text,Image, FlatList, StyleSheet, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import NetInfo from "@react-native-community/netinfo";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Home = () =>{
    const [albumsInfo, setAlbumsInfo] = useState([])

    async function showOfflineData(){
        let value = await AsyncStorage.getItem("resp");
        if(value == null || value == undefined){
            alert("Please check you internet connection")
        }else{
            setAlbumsInfo(JSON.parse(value))
        }
    }
    useEffect(async ()=>{
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                fetch('https://itunes.apple.com/search?term=jack+johnson')
              .then((resp) => resp.json())
                .then((resp) => {
              //Successful response from the API Call
                if(resp != null){
                    setAlbumsInfo(resp.results)
                    AsyncStorage.setItem("resp", JSON.stringify(resp.results));
                }

                 })
                .catch((error) => {
                console.error(error);
                 });       
            }else{
               showOfflineData()
            }
          });
        
    }, [])

    return(
        <View >
            <FlatList style = {styles.flastList}
                    ItemSeparatorComponent = {()=> getSeperator()}
                    data={albumsInfo}
                    renderItem={({item, index}) => getAlbum(item, index)}/>
        </View>
       
    )
}


function getAlbum(album, index){
    console.log(`album ${JSON.stringify(album.collectionViewUrl)}`)
    return( <View >
        <View style={{flexDirection:'row'}}>
        <Image  source={{uri: `${album.collectionViewUrl}`}} style={{ width: 100, height: 100 }} resizeMode='contain'/>
            <Text>{album.trackName}</Text>
        </View>
      </View>)
}

function getSeperator(){
    return( <View style = {styles.seperator}/>)
}



const styles = StyleSheet.create({
    flastList:{
        margin:20,
    },
    seperator:{
        flex:1,
        height:10
    }
})

