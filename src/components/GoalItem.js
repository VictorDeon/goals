import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = props => {
    const { goal } = props;

    return (
        <Pressable onPress={() => props.onDeleteItem(goal.id)}>
            <View style={styles.goalItem}>
                <Text style={{ color: "white" }}>{goal.text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      padding: 8,
    },
  });
  

export default GoalItem;