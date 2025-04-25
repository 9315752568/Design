import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({username}));
    navigation.navigate('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Connected</Text>
      <Text style={styles.subtitle}>Your favorite social network</Text>
      <Text style={styles.header}>Log in</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        Don't have an account?{' '}
        <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {fontSize: 28, fontWeight: 'bold', textAlign: 'center'},
  subtitle: {textAlign: 'center', marginBottom: 20},
  header: {fontSize: 22, marginBottom: 10},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {backgroundColor: '#4e5ed3', padding: 15, borderRadius: 8},
  buttonText: {color: '#fff', textAlign: 'center', fontWeight: 'bold'},
  linkText: {marginTop: 20, textAlign: 'center'},
  link: {color: '#4e5ed3'},
});
