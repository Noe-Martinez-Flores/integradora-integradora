import { StyleSheet, Text, View, FlatList, ScrollView, Modal, Alert, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'


const CustomHorarios = ({ horarios, especialidad }) => {

    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [horaSeleccionadaIndex, setHoraSeleccionadaIndex] = useState(0);
    const [isAvaliable, setIsAvaliable] = useState(false);

    const filterHorariosByTrue = (horarios) => {
        console.log('dataSet');
        return horarios.filter((item) => {
            return item.disponible === true;
        });
    }

    const setHorarioBusy = (horarioSeleccionado) => {
        horarios[horarioSeleccionado].disponible = false;
    }

    useEffect(() => {
        filterHorariosByTrue(horarios);
    }, [horarios]);



    const ViewModal = ({ }) => { // Asegúrate de desestructurar 'visible' correctamente
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.closeIconContainer}>
                                <AntDesign onPress={() => { setVisible(!visible) }} name="closecircle" size={24} color="black" />
                            </View>
                            <Text style={{ fontWeight: 'bold' }}>Horario día: {itemSelected?.dia} - Hora de: {itemSelected?.horas[horaSeleccionadaIndex].hora}</Text>
                            <Text style={styles.modalText}>
                                para: {especialidad}
                            </Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setVisible(!visible);
                                    setIsAvaliable(true);
                                }}>
                                <Text style={styles.textStyle}> Agendar cita </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };

    const GetInfo = () => {
        return (
            <>
                <View style={styles.centeredView}>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={isAvaliable}

                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                               
                                <Text style={{ fontWeight: 'bold', marginBottom : 10 }}>  {itemSelected?.horas[horaSeleccionadaIndex].disponible ? 'La cita ha sido registrada' : 'La cita ya ha sido agendada'}</Text>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setIsAvaliable(!isAvaliable)}>
                                    <Text style={styles.textStyle}> Cerrar </Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </>
        )
    }


    return (
        <>
            {
                visible && <ViewModal />
            }
            {
                isAvaliable && <GetInfo />
            }
            <FlatList
                horizontal={false}
                data={horarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={{ color: '#000', marginStart: 10 }}>{item.dia}</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                item.horas.map((hora, indexHoras) => {
                                    return (
                                        <TouchableOpacity activeOpacity={.7} key={indexHoras} style={{ backgroundColor: '#33C1FF', borderRadius: 5, margin: 5, padding: 5, height: 30 }}
                                            onPress={() => {
                                                setVisible(true);
                                                setItemSelected(item);
                                                setHoraSeleccionadaIndex(indexHoras);

                                            }}
                                        >
                                            <Text style={{ color: hora.disponible ? '#000' : '#fff' }}>{hora.hora}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                )}
            >
            </FlatList>
        </>
    )
}

export default CustomHorarios

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    card: {
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '100%',
        height: 70,
        elevation: 5,
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000aa'
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,

    },
    buttonOpen: {
        backgroundColor: '#33C1FF',
    },
    buttonClose: {
        backgroundColor: '#33C1FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    closeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})