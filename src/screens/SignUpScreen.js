import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSignUp = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4D5DFB" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={true} // This enables the scroll indicator
      >
        <View style={styles.topContainer}>
          <Text style={styles.connectedText}>Connected</Text>
          <Text style={styles.subtitleText}>Your favorite social network</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.loginTitle}>Create an account</Text>

            <Text style={styles.label}>Full name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Name Surname"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Username *</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.label}>E-mail *</Text>
            <TextInput
              style={styles.input}
              placeholder="email@email.com"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password *</Text>
            <View style={styles.inputContainer}>
              <Icon name="key" size={18} color="#888" style={styles.icon} />
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={18}
                  color="#888"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Repeat password *</Text>
            <View style={styles.inputContainer}>
              <Icon name="key" size={18} color="#888" style={styles.icon} />
              <TextInput
                style={styles.inputField}
                placeholder="Repeat password"
                placeholderTextColor="#aaa"
                secureTextEntry={!showRepeatPassword}
                value={repeatPassword}
                onChangeText={setRepeatPassword}
              />
              <TouchableOpacity
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}>
                <Icon
                  name={showRepeatPassword ? 'eye' : 'eye-slash'}
                  size={18}
                  color="#888"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked ? (
                  <Icon name="check" size={16} color="#4D5DFB" />
                ) : null}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I accept the{' '}
                <Text style={styles.link}>Terms and Conditions</Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={styles.loginButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText1}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupText2}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D5DFB',
  },
  topContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 50 : 30,
    paddingBottom: 10, // Reduced bottom padding for closer alignment
  },
  connectedText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitleText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 20,
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    fontSize: 14,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  inputField: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#000',
  },
  icon: {
    marginRight: 10,
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
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#4D5DFB',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#4D5DFB',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText1: {
    fontSize: 16,
    color: '#000',
  },
  signupText2: {
    fontSize: 16,
    color: '#4D5DFB',
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});
