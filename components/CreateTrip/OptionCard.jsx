import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#D3D3D3",
          borderRadius: 15,
        },
        selectedOption?.id==option?.id && {borderWidth:3}
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.Gray,
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 25,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}
