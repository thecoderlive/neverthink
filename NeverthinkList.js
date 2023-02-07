import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const neverthinkListItem = ({ item }) => (
<View style={styles.neverthink_list_item}>
<Image
    style={styles.think_image}
    source={{uri: item.think_image}}
    />
<Text style={styles.hand_picked_text}>{item.hand_picked_text}</Text>
<Text style={styles.suggestion}>{item.suggestion}</Text>
</View>
  );

const NeverthinkList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.neverthink_list}
    data={item}
    renderItem={neverthinkListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default NeverthinkList;

const styles = StyleSheet.create({
think_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
hand_picked_text: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
suggestion: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});