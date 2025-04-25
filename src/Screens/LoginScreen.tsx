import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native";
import { getStyles, useAppTheme } from "../Theme/AppTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const theme = useAppTheme();
  const themeStyle = getStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onLogin = async () => {
  try { 
    await AsyncStorage.setItem('userEmail', email)
    await AsyncStorage.setItem('isAuthenticated', "true")
    console.log("logging in");
    
  } catch (e){
    console.log(e)
  }
}
  

  return (
    <View style={[styles.container, themeStyle.primaryBackground]}>
      <Text style={styles.text}>Login into</Text>
      <Text style={[styles.text, {marginBottom: 50}]}>your account</Text>

      <TextInput 
        style={styles.textInput} 
        placeholder="Email address" 
        value={email}
        onChangeText={setEmail}/>
      <TextInput 
        style={styles.textInput} 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}/>

      <TouchableOpacity style={styles.forgotPass}>
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={[styles.loginText, {backgroundColor: theme.colors.buttons}]}>LOG IN</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassText}>or log in with</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 27,
    color: "#333",
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: '500',
  },
  textInput: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: "gray",
    padding: 7,
    marginBottom: 20,
    alignSelf: "center"
  },
  forgotPassText:{
    color: "gray"
  },
  forgotPass:{
    alignSelf: "flex-end",
    padding: 12,
    paddingRight: 35
  },
  loginText:{
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 26,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  loginButton: {
    paddingVertical: 25
  }
})
export default LoginScreen;