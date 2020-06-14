import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Card } from "react-native-paper";
import Ionicon from "react-native-vector-icons/Ionicons";

const Category = ({ title, route, icon }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableHighlight onPress={() => navigation.push(route)}>
        <Card>
          <Card.Title
            title={title}
            titleStyle={styles.cardTitle}
            style={{ backgroundColor: color }}
            left={<Ionicon name={icon} size={35} color='white' />}
          />
        </Card>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    color: "white",
    fontSize: 25,
  },
});

export default Category;
