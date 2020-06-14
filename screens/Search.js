import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Search = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Búsqueda</Text>
          <Searchbar
            placeholder="Busca aquí..."
            style={{ backgroundColor: '#dedede' }}
          />
          <Text style={styles.subtitle}>Categorías</Text>
          <View style={styles.card}>
            <TouchableHighlight
              onPress={() => navigation.push('MusicCategory')}
            >
              <Card>
                <Card.Title
                  title="Música"
                  titleStyle={styles.cardTitle}
                  style={{ backgroundColor: '#3564e6' }}
                  left={() => (
                    <Ionicon name="ios-musical-notes" size={35} color="white" />
                  )}
                />
              </Card>
            </TouchableHighlight>
          </View>
          <View style={styles.card}>
            <TouchableHighlight
              onPress={() => navigation.push('MusicCategory')}
            >
              <Card>
                <Card.Title
                  title="Político"
                  titleStyle={styles.cardTitle}
                  style={{ backgroundColor: '#35cc65' }}
                  left={() => (
                    <Ionicon name="ios-bookmarks" size={35} color="white" />
                  )}
                />
              </Card>
            </TouchableHighlight>
          </View>
          <View style={styles.card}>
            <TouchableHighlight
              onPress={() => navigation.push('MusicCategory')}
            >
              <Card>
                <Card.Title
                  title="Arte"
                  titleStyle={styles.cardTitle}
                  style={{ backgroundColor: '#de4545' }}
                  left={() => (
                    <Ionicon name="md-brush" size={35} color="white" />
                  )}
                />
              </Card>
            </TouchableHighlight>
          </View>
          <View style={styles.card}>
            <TouchableHighlight
              onPress={() => navigation.push('MusicCategory')}
            >
              <Card>
                <Card.Title
                  title="Comida"
                  titleStyle={styles.cardTitle}
                  style={{ backgroundColor: '#4fd9db' }}
                  left={() => (
                    <Ionicon name="md-pizza" size={35} color="white" />
                  )}
                />
              </Card>
            </TouchableHighlight>
          </View>
          <View style={styles.card}>
            <TouchableHighlight
              onPress={() => navigation.push('MusicCategory')}
            >
              <Card>
                <Card.Title
                  title="Entretenimiento"
                  titleStyle={styles.cardTitle}
                  style={{ backgroundColor: '#de1f72' }}
                  left={() => (
                    <Ionicon name="md-film" size={35} color="white" />
                  )}
                />
              </Card>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20
  },
  cardImage: {
    height: 130
  },
  cardTitle: {
    color: 'white',
    fontSize: 25
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20
  }
});

export default Search;