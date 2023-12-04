import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, CheckBox } from '@rneui/themed';

const citas = [
  {
    institucion: 'Hospital ABC',
    fecha: '2023-12-01',
    consultorio: 'Cardiología',
    citaAceptada: null,
  },
  {
    institucion: 'Clínica XYZ',
    fecha: '2023-12-05',
    consultorio: 'Dermatología',
    citaAceptada: null,
  },
  
];

const CitasPendientes = () => {
  return (
    <ScrollView style={styles.container}>
      {citas.map((cita, index) => (
        <Card key={index} containerStyle={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text>{cita.institucion}</Text>
            <Text>{cita.fecha}</Text>
          </View>
          <Text style={styles.consultorioLabel}>Consultorio:</Text>
          <Text>{cita.consultorio}</Text>
          <View style={styles.statusContainer}>
            <Text >Status:</Text>
            <View>
             <Text> Pendiente </Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  consultorioLabel: {
    fontWeight: 'bold',

  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical : 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 5,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
  },
  checkBoxText: {
    fontWeight: 'bold',
  },
});

export default CitasPendientes;
