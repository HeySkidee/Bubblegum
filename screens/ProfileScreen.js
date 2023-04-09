import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  const profile = {
    name: "John Doe",
    age: 28,
    hobbies: ["reading", "travelling", "hiking"],
    gender: "Male",
    zodiacSign: "Leo",
    religion: "Christian",
    genderPreference: "Female",
    image: require("../assets/profile1.jpg"),
  };

  return (
    <View style={styles.container}>
      <Image source={profile.image} style={styles.profileImage} />
      <Text style={styles.profileName}>{profile.name}</Text>
      <Text style={styles.profileDetail}>
        Age: {profile.age}, Gender: {profile.gender}
      </Text>
      <Text style={styles.profileDetail}>Hobbies: {profile.hobbies.join(", ")}</Text>
      <Text style={styles.profileDetail}>Zodiac Sign: {profile.zodiacSign}</Text>
      <Text style={styles.profileDetail}>Religion: {profile.religion}</Text>
      <Text style={styles.profileDetail}>Gender Preference: {profile.genderPreference}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  profileImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  profileDetail: {
    marginTop: 5,
    fontSize: 18,
  },
});

export default ProfileScreen;
