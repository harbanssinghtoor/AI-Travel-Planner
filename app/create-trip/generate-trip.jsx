import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, [tripData]);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo.name
    )
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1)
      .replace("{traveler}", tripData.traveler?.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1);

    console.log(FINAL_PROMPT);

    // const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result.response.text());
    setLoading(false);
    router.push("(tabs)/mytrip");
  };
  return (
    <View
      style={{
        padding: 25,
        marginTop: 75,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are working on it
      </Text>

      <Image
        source={require("./../../assets/images/loading3.gif")}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      />

      <Text
        style={{
          fontSize: 20,
          color: Colors.Gray,
          textAlign: "center",
        }}
      >
        Do Not Go Back
      </Text>
    </View>
  );
}
