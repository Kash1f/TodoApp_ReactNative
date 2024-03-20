import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnderedGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const currentCourseGoals = [
    ...courseGoals, enteredGoalText
  ]

  //this function will fetch the user input
  function goalInputHandler(enteredText) {
    setEnderedGoalText(enteredText)
  }

  //this function will run when the Add button will be clicked
  function addGoalHandler() {
    //here we will use setCourseGoals to update our goals in todo-list. Then in the end we will take our existing goals and append a new one by using the spread operator(...) to spread existing course goals into this new array so that existing goals can be kept, then I will add new goal by using enteredGoalText as a new goal
    setCourseGoals(currentCourseGoals)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}/>

        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <Text>{courseGoals.map((goal)=> <Text key={goal}></Text>)}
      </View>
    </View>
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
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
