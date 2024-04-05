import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TabBar = ({ navigation }) => {
  const tabs = [
    {
      name: 'Mesures',
      icon: require('C:/Users/jmast/frequencia/app/battementdecoeur.png'),
    },
    {
      name: 'Visualisation',
      icon: require('C:/Users/jmast/frequencia/app/graph.png'),
    },
    {
      name: 'Profile',
      icon: require('C:/Users/jmast/frequencia/app/Profile.png'),
    },
    {
      name: 'Parametres',
      icon: require('C:/Users/jmast/frequencia/app/parametres.png'),
    },
  ];

   return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Frequencia</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Graphe du 10/03/2024 à 15h36</Text>
        <View style={styles.submain}>
          <Text style={styles.text}>Fréquence (Hz)</Text>
          <Text style={styles.subtext}>Mesuré en Exercice, *Commentaire*</Text>
        </View>
      </View>
      <View style={styles.bottom}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => navigation.navigate(tab.name)}
          style={styles.tabButton}>
          <Image source={tab.icon} style={styles.tabIcon} />
          <Text style={styles.tabText}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  top: {
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 960,
    marginHorizontal: "auto",
    height: 80,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  submain: {
    top: 0,
    left: 0,
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-between',
    height: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  subtext: {
    fontSize: 20,
    color: 'grey',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tabButton: {
    flex: 1,
        backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    marginTop: 8,
    width: 30,
    height: 30,
  },
  img: {
    backgroundColor: 'white',
  width: '100%', height: 200, maxWidth: 300, maxHeight: 400
  },
  tabText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default TabBar;