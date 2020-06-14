import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Category from "../components/Category";

const Search = () => (
  <View style={{ backgroundColor: "white", flex: 1 }}>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Búsqueda</Text>
        <Searchbar
          placeholder='Busca aquí...'
          style={{ backgroundColor: "#dedede" }}
        />
        <Text style={styles.subtitle}>Categorías</Text>
        <Category
          title='Música'
          route='MusicCategory'
          color='#3564e6'
          icon='ios-musical-notes'
        />
        <Category
          title='Político'
          route='MusicCategory'
          color='#35cc65'
          icon='ios-bookmarks'
        />
        <Category
          title='Arte'
          route='MusicCategory'
          color='#de4545'
          icon='md-brush'
        />
        <Category
          title='Comida'
          route='MusicCategory'
          color='#4fd9db'
          icon='md-pizza'
        />
        <Category
          title='Entretenimiento'
          route='MusicCategory'
          color='#de1f72'
          icon='md-film'
        />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default Search;
