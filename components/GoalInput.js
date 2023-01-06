/** @format */

import React from "react";
import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ goalInput, addGoal, goalText, visible, isCancel }) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter goals"
          onChangeText={goalInput}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoal} color ="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={isCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
   
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color:'#120438',
    width: "100%",
    borderRadius:6,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  image:{
    width: '30%',
    height: '15%',
    margin:40,

  }
});

export default GoalInput;
