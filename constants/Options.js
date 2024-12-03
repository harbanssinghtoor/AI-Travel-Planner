export const SelectTravellerList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveller in exploration",
    icon: "✈︎",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travellers in a tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving individuals",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "🤝",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of Costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost moderatae",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight Price with booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details,Place Image Url , Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} day and {totalNight} night with each day plan with best time to visit in JSON Format";
