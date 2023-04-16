import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = props => {
    const [goalText, setGoalText] = useState("");

    const addGoalHandler = () => {
        props.onAddGoal(goalText);
        setGoalText("");
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Insira seus objetivos aqui!"
            onChangeText={setGoalText}
            value={goalText}
            />
            <Button title="Adicionar" onPress={addGoalHandler} />
      </View>
    );
}

const styles = StyleSheet.create({
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
    }
  });

export default GoalInput;