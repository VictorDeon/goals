import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from "react-native";
// O ScrollView/FlatList depende do seu pai, logo coloque sempre uma View acima dele definido o tamanho
// do scroll que será realizado, lembrando que existem atributos especificos para Android e IOS.
// Para listas nunca use o ScrollView pq ele sempre renderiza tudo que tem dentro, deixando-o lento.
// Use o FlatList que renderiza apenas os itens visiveis e vai rederizando o resto a medida que aparecem.
// No IOS o Text não aceita borda, logo estilizamos uma View acima dele

export default App = () => {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, {text: goalText, id: Math.random().toString()}]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insira seus objetivos aqui!"
          onChangeText={goalInputHandler}
        />
        <Button title="Adicionar" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
          renderItem={data => (
            <View style={styles.goalItem}>
              <Text style={{ color: "white" }}>{data.item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
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
  goalsContainer: {
    flex: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
});
