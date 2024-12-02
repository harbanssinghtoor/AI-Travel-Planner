import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const[email, setEmail] = useState();
  const[password , setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

const onSignIn=()=>{

  if(!email && !password){
    return ;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.replace('/mytrip');
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
}

  return (
    <View
      style={{
        padding: 25,
        marginTop: 50,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginTop: 20,
          color: Colors.Gray,
        }}
      >
        Welcome Back
      </Text>
      {/* <Text
        style={{
          fontSize: 30,
          marginTop: 10,
          color: Colors.Gray,
        }}
      >
        You've been missed!
      </Text> */}

      {/* Email */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={(value)=>setEmail(value)} placeholder="Enter Email" />
      </View>

      {/*Password*/}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
          placeholder="Enter Password"
        />
      </View>

      {/* SignInButton */}
      <TouchableOpacity onPress={onSignIn}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* CreateAccountButton */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 15,
          backgroundColor: Colors.White,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.Primary,
            textAlign: "center",
          }}
        >
          CreateAccount
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.Gray,
  },
});

export default SignIn;
