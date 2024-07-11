import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from './TextInput';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Products');
      // Show success snackbar
      Snackbar.show({
        text: 'Login successful!',
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (error) {
      // Show error snackbar
      Snackbar.show({
        text: 'Login failed, please try again',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleLogin()
      }}>
      {({handleChange, handleBlur, handleSubmit, errors}) => (
        <View style={styles.container}>
          <TextInput
            name="email"
            placeholder="Email"
            value={values.email}
            onChangeText={text => setEmail(text)}
            onBlur={handleBlur('email')}
            error={errors.email}
            style={styles.input} 
          />

          <TextInput
            name="password"
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            onBlur={handleBlur('password')}
            error={errors.password}
            style={styles.input} 
          />

          <Button title="Submit" style={styles.button} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff'
    },
    input: {
      height: 40, 
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#eee' 
    },
    button: {
      backgroundColor: '#3897f0',
      padding: 10
    }
  });