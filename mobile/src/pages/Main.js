import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {
    const [currentRegion, SetCurrentRegion] = useState(null);

    useEffect(()=> {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                SetCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.09,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if(!currentRegion) {
        return null;
    }

    return(
     <MapView initialRegion={currentRegion} style={styles.map}>
         <Marker coordinate={{ latitude: -23.5571769, longitude: -46.8543534 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/33633892?s=460&v=4' }} />             
             
             <Callout onPress={() => {
                 navigation.navigate('Profile', { github_usarname: 'BrunoBorgesDev' });
             }}>
                 <View style={styles.callout}>
                     <Text style={styles.devName}>Bruno Borges</Text>
                     <Text style={styles.devBio}>Apenas um mero aprendiz.</Text>
                     <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
                 </View>
             </Callout>
             </Marker>
         </MapView>
     ); 
}

const styles =StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },
})

export default Main;
