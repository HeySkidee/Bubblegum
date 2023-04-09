import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles, setProfiles] = useState([
    {
      name: "Skidee",
      image: require("../assets/profile2.jpg"),
      bio: "Hi, I am Skidee :)",
    },
    {
      name: "Hrishik",
      image: require("../assets/profile1.jpg"),
      bio: "Hello, I am Hrishik!",
    },
    {
        name: "Josh",
        image: require("../assets/profile3.jpg"),
        bio: "Yo wassup, I'm Josh",
      },
  ]);

  const handleSwipeLeft = () => {
    setCurrentIndex((currentIndex + 1) % profiles.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((currentIndex + 1) % profiles.length);
  };

  const handleProfileIconClick = () => {
    // Handle profile icon click
  };

  const handleChatIconClick = () => {
    // Handle chat icon click
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChatIconClick} style={[styles.icon, { left: 6 }]}>
        <MaterialCommunityIcons name="chat" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfileIconClick} style={[styles.icon, { right: 5 }]}>
        <MaterialCommunityIcons name="account" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleSwipeLeft}>
          <MaterialCommunityIcons name="close" size={50} color="red" />
        </TouchableOpacity>
        <Image source={profiles[currentIndex].image} style={styles.profileImage} />
        <TouchableOpacity onPress={handleSwipeRight}>
          <MaterialCommunityIcons name="heart" size={50} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileName}>{profiles[currentIndex].name}</Text>
        <Text style={styles.profileBio}>{profiles[currentIndex].bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    top: 10,
    padding: 7,
  },
  profileContainer: {
    height: 400,
    width: 300,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bdbdbd",
    flexDirection: "row",
  },
  profileImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  profileInfoContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileBio: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
