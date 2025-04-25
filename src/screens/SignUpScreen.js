import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUpScreen({navigation}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4D5DFB" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Connected</Text>
        <Text style={styles.subtitle}>Your favorite social network</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.loginTitle}>Create an account</Text>

        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={18} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Full name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <Icon name="user-o" size={18} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={18} color="#888" style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={18} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Repeat Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={18} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Repeat password"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsChecked(!isChecked)}>
            {isChecked ? (
              <Icon name="check" size={16} color="#4D5DFB" />
            ) : (
              <View style={styles.emptyBox} />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I accept the <Text style={styles.link}>terms and conditions</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    resizeMode: 'cover',
  },
  header: {
    backgroundColor: '#4D5DFB',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
  card: {
    marginTop: -50,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4D5DFB',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#4D5DFB',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#4D5DFB',
    borderRadius: 2,
  },
  emptyBox: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#4D5DFB',
    fontWeight: 'bold',
  },
});
