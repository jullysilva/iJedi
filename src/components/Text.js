import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function TextFont({ children, style }) {
    let newStyle = styles.text;

    if(style?.fontWeight === 'bold'){
        newStyle = styles.textBold;    
    }

    return(           
       <Text style={[style, newStyle]}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'normal'
    },
    textBold: {
        fontFamily: 'Roboto_700Bold',
        fontWeight: 'normal'
    }
});
