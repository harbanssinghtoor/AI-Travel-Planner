import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "./../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {

    const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 23,
      }}
    >
      <FontAwesome6 name="location-dot" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
        }}
      >
        No Trips planned yet
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: Colors.Gray,
        }}
      >
        Time to plan a new travel experience!
      </Text>

      <TouchableOpacity
      onPress={()=>router.push('./../create-trip/search-place')}
        style={{
          padding: 10,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            fontSize:16
          }}
        >
          Start new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
