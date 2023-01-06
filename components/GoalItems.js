/** @format */

import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItems = ({ text, removeGoals, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={removeGoals.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
   
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItems;
