import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  const onClickContinue=()=>
    {
            if(!selectedOption){
                return;
            }
            router.push('/create-trip/review-trip');
        }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 75,
          padding: 25,
          backgroundColor: Colors.White,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            marginTop: 20,
          }}
        >
          Budget
        </Text>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Choose spending Habit
          </Text>

          <FlatList
            data={SelectBudgetOptions}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  marginVertical: 10,
                }}
                onPress={() => setSelectedOption(item)}
              >
                <OptionCard option={item} selectedOption={selectedOption} />
              </TouchableOpacity>
            )}
          />
        </View>

        <TouchableOpacity
        onPress={()=>onClickContinue()}
          style={{
            padding: 15,
            backgroundColor: Colors.Primary,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.White,
              fontSize: 20,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
