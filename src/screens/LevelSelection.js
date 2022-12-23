import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Modal
} from 'react-native';
import ButtonLevel from './ButtonLevel';

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide'
        transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <ButtonLevel onClick={()=> props.onLevelSelected(0.1)} Easy/>
                    <ButtonLevel onClick={()=> props.onLevelSelected(0.2)} Normal/>
                    <ButtonLevel onClick={()=> props.onLevelSelected(0.3)} Hard/>
                </View>
            </View>
            
        </Modal> 
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)', 
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }, 
})