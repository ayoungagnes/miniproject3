const mongoose = require("mongoose");
const Room = require("../models/room");

const rooms = [
  {
    id: 1,
    title: "Wonderland",
    imgURL:
      "https://tse4.mm.bing.net/th?id=OIP.xQ172RH1Zyw7SOfJjOposQHaE8&pid=Api&P=0&h=180",
    theme: "fantasy",
  },
  {
    id: 2,
    title: "Pirates",
    imgURL: "https://w.wallhaven.cc/full/0j/wallhaven-0jq1rm.jpg",
    theme: "adventure",
  },
  {
    id: 3,
    title: "Vampire",
    imgURL:
      "https://wallpapers.com/images/hd/vampire-pictures-sgpwefqw5opau7k8.jpg",
    theme: "horror",
  },
  {
    id: 4,
    title: "Annabelle",
    imgURL:
      "https://tse3.mm.bing.net/th?id=OIP.6taHzAKsEOcBQK73G7b0eAHaEK&pid=Api&P=0&h=180",
    theme: "horror",
  },
  {
    id: 5,
    title: "Witches",
    imgURL:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ca29110-96b9-472b-8d5d-85700c6d7541/dgcrua8-431b288c-7266-4102-adfc-32f6d9b0561c.png/v1/fill/w_1280,h_732,q_80,strp/macbeth___three_witches__the__1_by_quantumreel_dgcrua8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    theme: "fantasy",
  },
  {
    id: 6,
    title: "Puzzle",
    imgURL:
      "https://tse4.mm.bing.net/th?id=OIP.aljhSXPfzJkiJV8cEY-WmQHaEJ&pid=Api&P=0&h=180",
    theme: "adventure",
  },
];

async function seedRooms() {
  try {
    await mongoose.connect("mongodb://localhost/myMiniProject3Database");
    console.log("Connected to MongoDB");

    await Room.deleteMany({});
    console.log("Cleared existing rooms");

    await Room.insertMany(rooms);
    console.log("Seeded rooms successfully");

    process.exit();
  } catch (err) {
    console.error("Error seeding rooms:", err);
    process.exit(1);
  }
}

seedRooms();
