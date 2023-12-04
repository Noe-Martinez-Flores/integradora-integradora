import { Feather } from '@expo/vector-icons';

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const CustomConsultorio = ({ navigation, consultorios = [] }) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={consultorios}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item, index }) => (
                <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={() => { navigation.navigate('horarios-clinicas', item) }}>
                    
                  <Image source={{ uri: item.img }} style={styles.imageStyle} />
                    <View style={styles.position}>
                        <Text style={styles.headerFontStyle}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
        >
            {/* onPress={() => { navigation.navigate('horarios-clinicas', item) }} */}
        </FlatList>
    )
}

export default CustomConsultorio

const styles = StyleSheet.create({
    card: {
        width: '49%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        flexGrow: 1,
        backgroundColor: '#069BDC',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
    },
    headerFontStyle: {
        fontWeight: 'bold', fontSize: 25, color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10
    },
    subHeaderStyle: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop : 10,
        marginStart: 10
    },
    imageStyle: {
        width: '100%', height: '100%', borderRadius: 5
    },
    position: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },

})