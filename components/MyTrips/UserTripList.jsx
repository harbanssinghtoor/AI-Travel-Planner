import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment/moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();

  return userTrips&&(
      <View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          {LatestTrip?.locationInfo?.photoRef ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  LatestTrip.locationInfo?.photoRef +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          ) : (
            <Image
              source={require("./../../assets/images/travel.jpeg")}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          )}
          <View
            style={{
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {userTrips[0]?.tripPlan?.tripDetails.location}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.Gray,
                }}
              >
                {moment(LatestTrip.startDate).format("MMM DD yyyy")}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: Colors.Gray,
                }}
              >
                🚌 {LatestTrip.traveler.title}
              </Text>
            </View>

            <TouchableOpacity
            onPress={()=>router.push({pathname:'/trip-details',params:{
              trip:JSON.stringify(userTrips[0])
            }})}
              style={{
                backgroundColor: Colors.Primary,
                padding: 15,
                borderRadius: 15,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.White,
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                See your plan
              </Text>
            </TouchableOpacity>
          </View>

          {userTrips.map((trip, index) => (
            <UserTripCard trip={trip} key={index} />
          ))}
        </View>
      </View>
    );
}
