const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : San Jose, CA, USA, for 8 Days and 7 Night for Friends with a Cheap budget with a Flight details , Flight Price with booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details,Place Image Url , Geo Coordinates, ticket Pricing, Time to travel each of the location for 8 day and 7 night with each day plan with best time to visit in JSON Format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'I cannot provide real-time flight and hotel prices or booking URLs.  Flight and hotel prices are dynamic and change constantly.  I also cannot access and display images directly.  This response will give you a framework for your trip plan, which you can then use to search for prices and bookings on sites like Expedia, Kayak, Google Flights, Booking.com, etc.\n\n```json\n{\n  "tripDetails": {\n    "location": "San Jose, CA, USA",\n    "duration": "8 days / 7 nights",\n    "budget": "Cheap",\n    "travelers": "Friends",\n    "bestTimetoVisit": "Spring (March-May) or Fall (September-November) for pleasant weather."\n  },\n  "flights": [\n    {\n      "airline": "Example Airline", \n      "flightNumber": "Example Number",\n      "origin": "Your Origin Airport", \n      "destination": "San Jose International Airport (SJC)",\n      "price": "Find on [link to flight search engine like Google Flights]",\n      "bookingUrl": "[Link to booking site - this will need to be manually added]"\n    },\n    {\n      "airline": "Example Airline",\n      "flightNumber": "Example Number",\n      "origin": "San Jose International Airport (SJC)",\n      "destination": "Your Origin Airport",\n      "price": "Find on [link to flight search engine like Google Flights]",\n      "bookingUrl": "[Link to booking site - this will need to be manually added]"\n    }\n  ],\n  "hotels": [\n    {\n      "hotelName": "Example Hotel 1",\n      "address": "Example Address, San Jose, CA",\n      "pricePerNight": "Find on [link to hotel booking site like Booking.com]",\n      "imageUrl": "[Image URL -  Manually add this]",\n      "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n      "rating": "3.5 stars",\n      "description": "Budget-friendly hotel with basic amenities. Close to public transport."\n    },\n     {\n      "hotelName": "Example Hotel 2",\n      "address": "Example Address, San Jose, CA",\n      "pricePerNight": "Find on [link to hotel booking site like Booking.com]",\n      "imageUrl": "[Image URL - Manually add this]",\n      "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n      "rating": "3 stars",\n      "description": "Another budget option. Might require a car for easy access to attractions."\n    }\n      //Add more hotels as needed\n  ],\n  "itinerary": {\n    "day1": {\n      "theme": "Arrival & Downtown Exploration",\n      "placesToVisit": [\n        {\n          "placeName": "San Jose City Hall",\n          "placeDetails": "Historic building in the heart of downtown.",\n          "imageUrl": "[Image URL - Manually add this]",\n          "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n          "ticketPricing": "Free",\n          "travelTime": "30 minutes (walk)"\n        },\n        {\n          "placeName": "San Jose Museum of Art",\n          "placeDetails": "Explore modern and contemporary art",\n          "imageUrl": "[Image URL - Manually add this]",\n          "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n          "ticketPricing": "Check website for pricing",\n          "travelTime": "15 minutes (walk/taxi)"\n        }\n      ]\n    },\n    "day2": {\n      "theme": "History & Culture",\n      "placesToVisit": [\n        {\n          "placeName": "The Tech Interactive",\n          "placeDetails": "Hands-on science museum",\n          "imageUrl": "[Image URL - Manually add this]",\n          "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n          "ticketPricing": "Check website for pricing",\n          "travelTime": "30 minutes (public transport or taxi)"\n        },\n        {\n          "placeName": "History Park at San Jose",\n          "placeDetails": "Living history museum showcasing San Jose\'s past",\n          "imageUrl": "[Image URL - Manually add this]",\n          "geoCoordinates": "[Latitude, Longitude - Manually add this]",\n          "ticketPricing": "Check website for pricing",\n          "travelTime": "45 minutes (public transport or taxi)"\n        }\n      ]\n    },\n    // Add days 3-8 similarly,  including places like:\n    // Winchester Mystery House, Santana Row, Guadalupe River Park, Alum Rock Park etc.\n  }\n}\n```\n\nRemember to replace the bracketed placeholders with actual information.  You\'ll need to research specific attractions, their details, pricing, and travel times. Use Google Maps for geocoordinates and travel times.  Use online travel agencies for hotel images, pricing and booking.  This framework allows for a customizable and realistic budget-friendly trip plan.\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
