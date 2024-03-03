import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  const [enteredGoalText, setEnderedGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(){

  }

  function addGoalHandler(){

  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
       
        <Button title="Add Goal" />
      </View>

      <View>
        <Text>{courseGoals}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal:16
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    paddingBottom:24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding:8,
   
  }
});
