import { Image, Linking, ScrollView, StyleSheet, Text, View, } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import CustomConsultorio from '../../../widget/customConsultorio';
import { MaterialCommunityIcons, Feather, MaterialIcons} from '@expo/vector-icons';



const ClinicaDetalles = ({ route, navigation }) => {
    const { ...item } = route.params;
    return (
        <>
            <View style={{ marginHorizontal: 10, marginTop: 10, flex: 1 }}>
                <Image source={{ uri: item.img }} style={{ width: '100%', height: 200, borderRadius: 5 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
                    {item.name}
                </Text>
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 20 }} >
                        <MaterialCommunityIcons name="hospital-marker" size={24} color="#0E8034" />Dirección : <Text style={{ color: '#000', fontSize: 14 }}>{item.address}</Text>
                    </Text>
                    <MapView
                        style={{ height: 100, width: '100%', marginTop: 10 }}
                        region={
                            {
                                latitude: item.lat,
                                longitude: item.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }
                        }
                    />
                </View>

                <Text style={{ marginTop: 10, fontWeight: '600', fontSize: 20 }} onPress={() => { Linking.openURL(`tel:${item.phone}`) }}>
                    <Feather name="phone" size={24} color="#0E8034" />Teléfono : <Text style={{ color: 'blue', fontSize: 18 }}>{item.phone}</Text>
                </Text>
                <Text  style={{ marginTop: 10, fontWeight: '600', fontSize: 20 }}><MaterialIcons name="category" size={24} color="#0E8034" /> Consultorios : </Text>
                <CustomConsultorio consultorios={item.consultorios} navigation={navigation} />

            </View>
        </>
    )
}

export default ClinicaDetalles