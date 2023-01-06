/** @format */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [showVisble, setShowVisble] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInput = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoal = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText("");
    hideModelVisible();
  };

  const handleModelVisible = () => {
    setShowVisble(true);
  };
  const hideModelVisible = () => {
    setShowVisble(false);
  };

  const removeGoals = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={handleModelVisible}
        />
        <GoalInput
          visible={showVisble}
          goalInput={goalInput}
          addGoal={addGoal}
          goalText={goalText}
          isCancel={hideModelVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  removeGoals={removeGoals}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />

          {/* <ScrollView >
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
