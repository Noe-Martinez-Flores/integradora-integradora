import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Recetas = () => {

    const records = [
        {
            doctor: 'Dr. Juan Pérez',
            fecha: '10/10/2021',
            razon: 'Dolor de cabeza',
            indicaciones: 'Tomar 1 pastilla cada 8 horas',
            medicamentos: [
              {
                nombre: 'Paracetamol',
                instruccion: 'Tomar 1 pastilla cada 8 horas',
              },
              {
                nombre: 'Ibuprofeno',
                instruccion: 'Tomar 1 pastilla cada 8 horas',
              },
            ],
          },
          {
            doctor: 'Dra. María García',
            fecha: '15/11/2021',
            razon: 'Gripe',
            indicaciones: 'Descansar y beber líquidos',
            medicamentos: [
              {
                nombre: 'Vitamina C',
                instruccion: 'Tomar 1 pastilla al día',
              },
              {
                nombre: 'Jarabe para la tos',
                instruccion: 'Tomar 1 cucharada cada 6 horas',
              },
            ],
          },
          {
            doctor: 'Dr. Ana Rodríguez',
            fecha: '05/12/2021',
            razon: 'Esguince en el tobillo',
            indicaciones: 'Aplicar hielo y mantener reposo',
            medicamentos: [
              {
                nombre: 'Antiinflamatorio',
                instruccion: 'Tomar 1 pastilla cada 12 horas',
              },
              {
                nombre: 'Analgésico',
                instruccion: 'Tomar 1 pastilla cada 8 horas',
              },
            ],
          },
          {
            doctor: 'Dr. Roberto Jiménez',
            fecha: '22/01/2022',
            razon: 'Problemas gastrointestinales',
            indicaciones: 'Seguir una dieta blanda y beber agua',
            medicamentos: [
              {
                nombre: 'Antidiarreico',
                instruccion: 'Tomar 1 pastilla después de cada evacuación',
              },
              {
                nombre: 'Protector gástrico',
                instruccion: 'Tomar 1 pastilla antes de cada comida',
              },
            ],
          },
          {
            doctor: 'Dra. Laura Sánchez',
            fecha: '10/03/2022',
            razon: 'Insomnio',
            indicaciones: 'Establecer una rutina de sueño y evitar estimulantes',
            medicamentos: [
              {
                nombre: 'Pastillas para dormir',
                instruccion: 'Tomar 1 pastilla antes de dormir',
              },
              {
                nombre: 'Infusión relajante',
                instruccion: 'Tomar antes de acostarse',
              },
            ],
          },
    ];

  return (
    <ScrollView style={styles.container}>
      {records.map((record, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.doctor}>{record.doctor}</Text>
            <Text style={styles.date}>{record.fecha}</Text>
          </View>
          <Text style={styles.reason}>{record.razon}</Text>
          <Text style={styles.indications}>{record.indicaciones}</Text>
          <View style={styles.medications}>
            <Text style={styles.medicationsTitle}>Medicamentos:</Text>
            {record.medicamentos.map((medication, idx) => (
              <Text key={idx} style={styles.medication}>
                {medication.nombre} - {medication.instruccion}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  doctor: {
    fontWeight: 'bold',
  },
  date: {
    color: '#555',
  },
  reason: {
    textAlign: 'center',
    marginBottom: 10,
  },
  indications: {
    textAlign: 'justify',
    marginBottom: 10,
  },
  medications: {},
  medicationsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  medication: {
    marginLeft: 15,
  },
});

export default Recetas;
