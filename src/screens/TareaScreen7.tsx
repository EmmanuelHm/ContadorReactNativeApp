import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen7 = () => {
  return (
    <View style={ styles.container }>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaAzul} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D3',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
})