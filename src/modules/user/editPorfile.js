import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from '@rneui/themed';


const EditProfile = ({ navigation }) => {

  const handleInputFocus = () => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  };

  const handleInputBlur = () => {
    navigation.setOptions({
      tabBarVisible: true,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
      <Avatar
          size={100}
          rounded
          source={{
            uri: 'https://i.pravatar.cc/800',
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#149ACC" />
        <TextInput placeholder="Nombre" style={styles.input}  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#149ACC" />
        <TextInput placeholder="Apellidos" style={styles.input}  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#149ACC" />
        <TextInput placeholder="Correo electrónico" style={styles.input} keyboardType="email-address"  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#149ACC" />
        <TextInput placeholder="Teléfono celular" style={styles.input} keyboardType="phone-pad"  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="birthday-cake" size={20} color="#149ACC" />
        <TextInput placeholder="Edad" style={styles.input} keyboardType="numeric"  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="#149ACC" />
        <TextInput placeholder="Dirección" style={styles.input}  onFocus={handleInputFocus}
          onBlur={handleInputBlur}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#149ACC',
    marginBottom : 20
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default EditProfile;
