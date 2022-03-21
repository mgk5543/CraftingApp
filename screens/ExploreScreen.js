import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default function ExploreScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore</Text>
      <Button
        title="Go to Idea Feed"
        onPress={() => navigation.navigate('Idea')}
      />
      </View>
    );
}