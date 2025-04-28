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
import {useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

  const handleLogin = () => {
    dispatch(login({username}));
    navigation.replace('HomeTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4D5DFB" barStyle="light-content" />

      <View style={styles.topContainer}>
        <Text style={styles.connectedText}>Connected</Text>
        <Text style={styles.subtitleText}>Your favorite social network</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.loginTitle}>Log in</Text>

          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <Icon
              name="user"
              size={18}
              color={isUsernameFocused ? '#4D5DFB' : '#888'}
              style={styles.icon}
            />
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#aaa"
              style={styles.input}
              onFocus={() => setIsUsernameFocused(true)}
              onBlur={() => setIsUsernameFocused(false)}
            />
          </View>

          <View style={styles.passwordRow}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="key" size={18} color="#888" style={styles.icon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={18}
                color={showPassword ? '#4D5DFB' : '#888'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText1}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D5DFB',
  },
  topContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 50 : 30,
    paddingBottom: 30,
  },
  connectedText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitleText: {
    fontSize: 14,
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
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
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
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#000',
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  forgotText: {
    fontSize: 12,
    color: '#4D5DFB',
  },
  loginButton: {
    backgroundColor: '#4D5DFB',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  signupText1: {
    fontSize: 14,
    color: '#000',
  },
  signupText2: {
    fontSize: 14,
    color: '#4D5DFB',
    fontWeight: 'bold',
  },
});
