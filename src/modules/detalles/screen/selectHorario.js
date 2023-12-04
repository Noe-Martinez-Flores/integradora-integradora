import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHorarios from '../../../widget/customHorarios';

const SelectHorario = ({ route, navigation }) => {
    const { ...item } = route.params;
    return (
        <>
            <View style={styles.containter}>
                <View style={styles.headerContainer}>
                    <Image source={{ uri: item.img }} style={styles.imageStyle} />
                    <View style={styles.position}>
                        <Text style={styles.headerFontStyle}>
                            {item.name}
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.subHeaderStyle}>Horarios Disponibles </Text>
                    <CustomHorarios horarios={JSON.parse(JSON.stringify(item.horarios))} especialidad={item.name} />
                </View>


            </View>
        </>

    );
}

export default SelectHorario

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        margin: 10
    },
    imageStyle: {
        width: '100%', height: 200, borderRadius: 5
    },
    position: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    headerFontStyle: {
        fontWeight: 'bold', fontSize: 50, color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10
    },
    card: {
        marginTop: 20,
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    subHeaderStyle: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 10,
        marginStart: 10
    }
})