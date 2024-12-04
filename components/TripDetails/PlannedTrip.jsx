import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PlannedTrip({ details }) {
  if (!details || !details.itinerary) {
    return <Text style={styles.errorText}>No trip details available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⛺️ Plan Details</Text>

      {Object.entries(details.itinerary).map(([day, dayDetails]) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>
            {day.charAt(0).toUpperCase() + day.slice(1)}: {dayDetails.theme}
          </Text>
          {dayDetails.placesToVisit.map((place, index) => (
            <View key={index} style={styles.placeContainer}>
              <Text style={styles.placeName}>{place.placeName}</Text>
              <Text style={styles.placeDetails}>{place.placeDetails}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  placeContainer: {
    marginLeft: 10,
    marginTop: 5,
    borderLeftWidth: 3,
    borderLeftColor: "#ddd",
    paddingLeft: 10,
    marginBottom: 5,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  placeDetails: {
    fontSize: 14,
    color: "gray",
    marginTop: -2,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});
