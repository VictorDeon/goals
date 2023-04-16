import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";
// O ScrollView/FlatList depende do seu pai, logo coloque sempre uma View acima dele definido o tamanho
// do scroll que será realizado, lembrando que existem atributos especificos para Android e IOS.
// Para listas nunca use o ScrollView pq ele sempre renderiza tudo que tem dentro, deixando-o lento.
// Use o FlatList que renderiza apenas os itens visiveis e vai rederizando o resto a medida que aparecem.

export default App = () => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = text => {
    setGoals(currentGoals => [...currentGoals, {text, id: Math.random().toString()}]);
    setShowModal(false);
  };

  const deleteGoalHandler = id => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  }

  return (
    <View style={styles.container}>
      <Button title="Adicionar novo objetivo" color="#5e0acc" onPress={() => setShowModal(true)} />
      <GoalInput visible={showModal} onAddGoal={addGoalHandler} onCancel={() => setShowModal(false)} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
          renderItem={data => <GoalItem goal={data.item} onDeleteItem={deleteGoalHandler} />}
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
  goalsContainer: {
    flex: 5,
  }
});
