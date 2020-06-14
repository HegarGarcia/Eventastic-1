import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Alert } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const EventCard = ({ title, image, date, location }) => {
  const navigation = useNavigation();
  const goToEvent = useCallback(() => navigation.push("VerMas"), []);
  const alert = useCallback(
    () =>
      Alert.alert(
        `Asistiras a ${title}\nEste evento ahora aparecerá en tú perfil`
      ),
    []
  );

  return (
    <Card elevation={2} style={styles.card}>
      <Card.Title subtitle={date} />
      <Card.Cover source={image} style={styles.cardImage} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{location}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button color='#fcba03' onPress={goToEvent}>
          VER MÁS
        </Button>
        <Button color='#fcba03' onPress={alert}>
          ASISTIR
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  cardImage: {
    height: 130,
  },
});

export default EventCard;
