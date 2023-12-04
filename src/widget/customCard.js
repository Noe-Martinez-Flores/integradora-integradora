import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text} from "react-native"


const CustomCard = ({ navigation, listClinicas = []}) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={listClinicas}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index} style={styles.card} activeOpacity={.7} onPress={ () => navigation.push('detalle-clinica', item) }>
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: '100%', height: 150, borderRadius: 5 }}
                    />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14 }}>{item.address}</Text>
                        <Text style={{ fontSize: 14 }}>{item.phone}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default CustomCard

const styles = StyleSheet.create({
    card: {
        width: '90%',
        marginVertical: 20,
        height: 225,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 5,
        alignSelf: 'center',
    }
});