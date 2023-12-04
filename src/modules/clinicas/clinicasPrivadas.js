import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import CustomCard from '../../widget/customCard.js'


const ClinicasPrivadas = ({ navigation }) => {
    const listClinicas = [
        {
            id: 1,
            name: 'ISSTE',
            address: 'Emiliano zapata # 123',
            phone: '1234567890',
            img: 'https://www.gob.mx/cms/uploads/press/main_image/163047/post_ISSSTE_02.jpeg',
            lat : 18.847477199587,
            lng :  -99.1976374776867,
            latDelta : 0.0922,
            lngDelta : 0.0421,
            consultorios: [
                {
                    id: 1, name: 'Dentista', img: 'https://www.wedental.mx/wp-content/uploads/2022/10/cirujano-dentista-cdmx-min.webp',
                    horarios: [
                        {
                            id: 1, dia: 'Lunes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                                { id: 21, hora: '19:00 - 19:30', disponible: true },
                                { id: 22, hora: '19:30 - 20:00', disponible: true },

                            ]
                        },
                        {
                            id: 2, dia: 'Martes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                                { id: 21, hora: '19:00 - 19:30', disponible: true },

                            ]
                        },
                        {
                            id: 3, dia: 'Miercoles', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                        {
                            id: 4, dia: 'Jueves', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                        {
                            id: 5, dia: 'Viernes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                    ]
                },
                {
                    id: 2, name: 'Pediatra', img: 'https://policlinicametropolitana.org/wp-content/uploads/2023/08/doctor-haciendo-su-trabajo-oficina-pediatria.jpg',
                    horarios: [
                        {
                            id: 1, dia: 'Lunes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                                { id: 21, hora: '19:00 - 19:30', disponible: true },
                                { id: 22, hora: '19:30 - 20:00', disponible: true },

                            ]
                        },
                        {
                            id: 2, dia: 'Martes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                                { id: 21, hora: '19:00 - 19:30', disponible: true },

                            ]
                        },
                        {
                            id: 3, dia: 'Miercoles', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                        {
                            id: 4, dia: 'Jueves', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                        {
                            id: 5, dia: 'Viernes', horas: [
                                { id: 1, hora: '9:00 - 9:30', disponible: true },
                                { id: 2, hora: '9:30 - 10:00', disponible: true },
                                { id: 3, hora: '10:00 - 10:30', disponible: true },
                                { id: 4, hora: '10:30 - 11:00', disponible: true },
                                { id: 5, hora: '11:00 - 11:30', disponible: true },
                                { id: 6, hora: '11:30 - 12:00', disponible: true },
                                { id: 7, hora: '12:00 - 12:30', disponible: true },
                                { id: 8, hora: '12:30 - 13:00', disponible: true },
                                { id: 9, hora: '13:00 - 13:30', disponible: true },
                                { id: 10, hora: '13:30 - 14:00', disponible: true },
                                { id: 11, hora: '14:00 - 14:30', disponible: true },
                                { id: 12, hora: '14:30 - 15:00', disponible: true },
                                { id: 13, hora: '15:00 - 15:30', disponible: true },
                                { id: 14, hora: '15:30 - 16:00', disponible: true },
                                { id: 15, hora: '16:00 - 16:30', disponible: true },
                                { id: 16, hora: '16:30 - 17:00', disponible: true },
                                { id: 17, hora: '17:00 - 17:30', disponible: true },
                                { id: 18, hora: '17:30 - 18:00', disponible: true },
                                { id: 19, hora: '18:00 - 18:30', disponible: true },
                                { id: 20, hora: '18:30 - 19:00', disponible: true },
                            ],
                        },
                    ]
                },
                
                
            ]
        },        
    ]

    return (
        <>

            <CustomCard listClinicas={listClinicas} navigation={navigation} />

        </>
    )
}

export default ClinicasPrivadas

