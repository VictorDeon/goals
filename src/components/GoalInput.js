import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
    const [goalText, setGoalText] = useState("");

    const addGoalHandler = () => {
        props.onAddGoal(goalText);
        setGoalText("");
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Insira seus objetivos aqui!"
                    onChangeText={setGoalText}
                    value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Adicionar" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancelar" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      padding: 16,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "100%",
      padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
  });

export default GoalInput;