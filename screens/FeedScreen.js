import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default function FeedScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      </View>
    );
}


