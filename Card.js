import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { data } from './data';

const Card = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.rowContainer}>
        {data.map((item, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.title}>{item.title.slice(0, 12)}{item.title.length > 20 ? '...' : ''}...</Text>
            <Text style={styles.description}>{item.plot_summary}{item.plot_summary.slice(0, 25)}{item.plot_summary.length > 20 ? '...' : ''}...</Text>
            <Text style={styles.releaseDate}>{item.release_date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 180,
    margin: 8, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
  releaseDate: {
    fontSize: 15
  }
});

export default Card;
