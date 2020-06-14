import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventCard from "../components/EventCard";

const Home = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Populares cerca de tí</Text>
      <EventCard
        date='VIE, JUNIO 05 - 12:00 AM'
        image={require("../assets/pedaMasiva.jpg")}
        location='Casa de Ulises Magaña'
        title='Peda masiva'
      />
      <EventCard
        date='VIE, JUNIO 10 - 4:00 AM'
        image={require("../assets/after.jpg")}
        location='Boquita'
        title='After party'
      />
      <Text style={styles.subtitle}>Esta tarde</Text>
      <EventCard
        date='VIE, JUNIO 8 - 5:00 PM'
        image={require("../assets/piensaBiblia.jpg")}
        location='Casa de Hegar García'
        title='Lectura de Biblia'
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 15,
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

export default Home;
