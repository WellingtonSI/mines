import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export default props =>{
    return (
        <TouchableOpacity onPress={props.onClick}
            style={[styles.button, props.Easy? styles.bgEasy : props.Normal? styles.bgNormal: props.Hard ?  styles.bgHard : ""]} >
            <Text style={styles.buttonLabel}>{props.Easy? "Fácil" : props.Normal? "Intermediário": props.Hard ?  "Difícil" : ""}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal:{
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})