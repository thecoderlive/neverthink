import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import NeverthinkList from './NeverthinkList'

const Neverthink = () => (
<ScrollView style={styles.neverthink} showsVerticalScrollIndicator={false}>
<NeverthinkList item={item.neverthink_list}/>
</ScrollView>
)

export default Neverthink;

const styles = StyleSheet.create({

});