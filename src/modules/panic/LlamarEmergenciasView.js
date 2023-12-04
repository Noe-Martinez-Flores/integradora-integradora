import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const LlamarEmergenciasView = () => {
  const handleLlamarEmergencias = () => {
    Linking.openURL('tel:911');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLlamarEmergencias} style={styles.circleButton}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Llamar a emergencias</Text>
          <Icon name="phone" type="font-awesome" color="#fff" size={30} style={{ paddingTop: -10 }} />
        </View>
      </TouchableOpacity>
      <Text style={styles.descriptionText}>
        Al presionar este botón, será redirigido al teléfono del dispositivo para poder llamar al teléfono de emergencias.
        Utilice esta acción con precaución.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circleButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
  },
});

export default LlamarEmergenciasView;
