import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Icon, Text } from '@rneui/themed';

const HistorialMedico = () => {
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
       
            <Icon name="user" type="font-awesome" color="#149ACC" size={20} style={styles.icon} />
        
          <Text style={styles.text}>Nombre y Apellidos</Text>
        </Card.Title>
        <Text>John Doe</Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
        
            <Icon name="heartbeat" type="font-awesome" color="#149ACC" size={20} style={styles.icon} />
          <Text style={styles.text}>Alergias</Text>
        </Card.Title>
        <Text>Sin alergias conocidas</Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
            <Icon name="heartbeat" type="font-awesome" color="#149ACC" size={20} style={styles.icon} />
          <Text style={styles.text}>Padecimientos</Text>
        </Card.Title>
        <Text>Ningún padecimiento crónico</Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
            <Icon name="pills" type="font-awesome-5" color="#149ACC" size={20} style={styles.icon} />
          <Text style={styles.text}>Medicamentos Usuales</Text>
        </Card.Title>
        <Text>Ningún medicamento regular</Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
            <Icon name="phone" type="font-awesome" color="#149ACC" size={20} style={styles.icon} />
          <Text style={styles.text}>Número de Emergencia</Text>
        </Card.Title>
        <Text>123-456-7890</Text>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>
            <Icon name="calendar-clock" type="material-community" color="#149ACC" size={20} style={styles.icon} />
          <Text style={styles.text}>Padecimientos Recientes</Text>
        </Card.Title>
        <Text>Ningún padecimiento reciente</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    alignSelf: 'flex-start',
    alignContent: 'space-between'

  },
  iconContainer: {
    margin: 10
  },
  icon: {
    marginEnd: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});

export default HistorialMedico;
