import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import Text from '../../components/Text'


export default function Item({item:{ name, image }}){
    return(
        <View style={styles.item}>
            <Text styles={styles.name}>{name}</Text>
            <Image style={styles.image} source={image} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    image: {
        width: 35,
        height: 35
    },
    name: {
        fontSize: 15,
        color: '#e4e4e4',
        marginLeft: 15,
        lineHeight: 25,
        paddingHorizontal: 15,
    }
})