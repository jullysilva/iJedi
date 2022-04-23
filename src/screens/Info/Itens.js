import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import Text from '../../components/Text'


export default function Itens({ title, list }){
    return(
        <>
            <Text style={styles.title}>{title}</Text>
            {list.map(({ name, image }) => {
                return (
                    <View style={styles.item}>
                        <Text styles={styles.title}>{name}</Text>
                        <Image style={styles.image} source={image} />
                    </View>
                );
            })}
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#ffa500',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 15,
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
        lineHeight: 25
    }
})