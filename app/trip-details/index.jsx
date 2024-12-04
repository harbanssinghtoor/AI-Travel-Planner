import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "./../../constants/Colors";
import moment from "moment";
import PlannedTrip from "./../../components/TripDetails/PlannedTrip"

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  // Parse data safely
  const parseData = (data) => {
    try {
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (error) {
      console.error("Error parsing data:", error);
      return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    // Parse and set trip details
    const parsedTrip = parseData(trip);
    setTripDetails(parsedTrip);
  }, [trip]);

  if (!tripDetails) {
    return (
      <View>
        <Text>Loading trip details...</Text>
      </View>
    );
  }

  const { tripData, tripPlan } = tripDetails;
  const formattedTripData = parseData(tripData);

  return (
    <ScrollView>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formattedTripData?.locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: "100%",
          height: 330,
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.White,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
          }}
        >
          {tripPlan?.tripDetails?.location}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.Gray,
            }}
          >
            {moment(formattedTripData?.startDate).format("MMM DD yyyy")}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.Gray,
            }}
          >
            - {moment(formattedTripData?.endDate).format("MMM DD yyyy")}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.Gray,
          }}
        >
          🚌 {formattedTripData?.traveler?.title}
        </Text>

        {/* Trip Day Planner  */}
          <PlannedTrip details={tripDetails?.tripPlan?.itinerary}/>
      </View>

      {/* <View></View> */}
    </ScrollView>
  );
}
