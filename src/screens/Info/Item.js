import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import Text from '../../components/Text'


export default function Item({item:{ name, image }}){
    return(
        <View style={styles.item}>
            <Image style={styles.image} source={image} />
            <Text styles={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    image: {
        marginRight: 20,
        width: 35,
        height: 35
    },
    name: {
        fontSize: 15,
        color: '#e4e4e4',
        lineHeight: 25
    }
})