import { View, Text,StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

const Login = ( { navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#167BA4', '#39B0E0','white']}
      style={styles.container}
      start={{ x : 0, y: 0}}
      end={{ x : 1, y: 1}}
    >
      <TextInput
        placeholder="Numero del seguro social o correo electronico"
        placeholderTextColor="#fff"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
      >
      </TextInput>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#fff"
        
        style={styles.input}
        secureTextEntry={true}
        onChangeText={pass => setPassword(pass)}
        value={password}
      >
      </TextInput>
      <TouchableOpacity style={styles.loginButton} onPress={ () => { navigation.navigate('TabContainer', { screen : 'clinicas-publicas'}) }
    }>
        <Text style={styles.loginButtonText}>Iniciar sesion</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  text : {
    color : '#fff'
  }
});

export default Login;