import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';

const UserProfile = ({navigation}) => {
  const [user, setUser] = useState({
    nombre: 'John',
    apellidos: 'Doe',
  });

  const options = [
    'Recetas',
    'Ver Historial Médico',
    'Citas Realizadas',
    'Citas Pendientes',
  ];

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity style={styles.optionItem} 
      onPress={() => {
        if (item === 'Recetas') {
          navigation.navigate('recetas');
        }
        if (item === 'Editar Historial Médico') {
          navigation.navigate('edit-historial-medico');
        }
        if (item === 'Ver Historial Médico') {
          navigation.navigate('historial-medico');
        }
        if (item === 'Citas Realizadas') {
          navigation.navigate('citas-realizadas');
        }
        if (item === 'Citas Pendientes') {
          navigation.navigate('citas-pendientes');
        }
      }}
    >
      {
        item === 'Recetas' && <MaterialIcons name="receipt" size={24} color="#149ACC" />
      }
      {
        item === 'Editar Historial Médico' && <MaterialIcons name="edit" size={24} color="#149ACC" />
      }
      {
        item === 'Ver Historial Médico' && <MaterialIcons name="visibility" size={24} color="#149ACC" />
      }
      {
        item === 'Citas Realizadas' && <MaterialIcons name="done" size={24} color="#149ACC" />
      }
      {
        item === 'Citas Pendientes' && <MaterialIcons name="pending" size={24} color="#149ACC" />
      }
      <Text style={styles.optionText}>{item}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#149ACC" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user.nombre} {user.apellidos}</Text>
        <Avatar
          size={100}
          rounded
          source={{
            uri: 'https://i.pravatar.cc/800',
          }}
        />

      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.touchableOpacityStyle}
        onPress={() => navigation.navigate('edit-profile')}
      >
        <Text style={styles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
      <FlatList
        data={options}
        renderItem={renderOptionItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginRight: 8,
  },
  touchableOpacityStyle: {
    backgroundColor: '#149ACC',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default UserProfile;
