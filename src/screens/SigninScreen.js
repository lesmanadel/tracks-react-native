import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  return (
    <View styles={styles.container}>
      <NavigationEvents onWillFocus= {clearErrorMessage}/>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        text="Does not have an account? Sign Up here"
        routeName="Signup"
      />

    </View>
  )
};


SigninScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  }
});

export default SigninScreen;
