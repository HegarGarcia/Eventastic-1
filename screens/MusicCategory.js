import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventCard from "../components/EventCard";

const MusicCategory = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Música</Text>
      <Text style={styles.subtitle}>Esta semana</Text>
      <EventCard
        date='MIE, JUNIO 25 - 8:00 PM'
        image={require("../assets/banda.jpg")}
        location='Garage'
        title='Garage Band(a)'
      />
      <EventCard
        date='MIE, JUNIO 25 - 8:00 PM'
        image={require("../assets/vocaloid.jpg")}
        location='Casa de Hatsune'
        title='Vocaloid'
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default MusicCategory;
