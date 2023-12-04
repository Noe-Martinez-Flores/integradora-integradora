import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, CheckBox } from '@rneui/themed';

const citas = [
  {
    institucion: 'Hospital ABC',
    fecha: '2023-12-01',
    consultorio: 'Cardiología',
    citaAceptada: true,
  },
  {
    institucion: 'Clínica XYZ',
    fecha: '2023-12-05',
    consultorio: 'Dermatología',
    citaAceptada: false,
  },
  {
    institucion: 'Centro Médico Delta',
    fecha: '2023-12-10',
    consultorio: 'Neurología',
    citaAceptada: true,
  },
  {
    institucion: 'Consultorio Dental Gamma',
    fecha: '2023-12-15',
    consultorio: 'Odontología',
    citaAceptada: false,
  },
  {
    institucion: 'Hospital General Sigma',
    fecha: '2023-12-20',
    consultorio: 'Ortopedia',
    citaAceptada: true,
  },
  {
    institucion: 'Laboratorio Médico Beta',
    fecha: '2023-12-25',
    consultorio: 'Análisis Clínicos',
    citaAceptada: true,
  },
  {
    institucion: 'Centro de Rehabilitación Epsilon',
    fecha: '2023-12-30',
    consultorio: 'Fisioterapia',
    citaAceptada: false,
  },
  
];

const CitasRealizadas = () => {
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
          <View style={{...styles.statusContainer, backgroundColor : cita.citaAceptada ? '#15B32D' : '#F7533C'}}>
            <Text style={{ color : '#fff'}}>Status:</Text>
            <View>
              <Text style={{ color : '#fff'}}>
                {cita.citaAceptada ? 'Aceptada' : 'Rechazada'}
              </Text>
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

export default CitasRealizadas;
