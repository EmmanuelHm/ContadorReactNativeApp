import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

//Obtener las dimensiones del Dispositivo 1
// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

//Obtener las dimensiones del Dispositivo 2
    const {width, height} = useWindowDimensions();

  return (
    <View>
        <View style={ styles.container }>
            <View style={{
                ...styles.cajaMorada,
                width: width * 0.6
            }} />
            <View style={styles.cajaNaranja} />
        </View>
        <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F8A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})
