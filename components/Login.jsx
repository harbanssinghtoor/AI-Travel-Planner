import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 550,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Globe Guide
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: Colors.Gray,
            marginTop: 15,
          }}
        >
          Discover your next adventure effortlessly. Travel smarter with Globe
          Guide
        </Text>

        <TouchableOpacity style={styles.button} onPress={()=> router.push('auth/sign-in')}>
          <Text
            style={{
              color: Colors.White,
              textAlign: "center",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    marginTop: -30,
    padding: 45,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.Primary,
    borderRadius: 99,
    marginTop: "10%",
  },
});

export default Login;
