import { StyleSheet, View, Text, Pressable } from "react-native";
// Touchable e outro todos são substituiveis pelo Pressable
// No IOS o Text não aceita borda, logo estilizamos uma View acima dele.
// A estilização do click no android usa o android_ripple já no IOS tem que
// usar o style com o props.pressed

const GoalItem = props => {
    const { goal } = props;

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}}
                style={props => props.pressed && styles.pressedItemIOS}
                onPress={() => props.onDeleteItem(goal.id)}>
                <Text style={styles.text}>{goal.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
    },
    pressedItemIOS: {
        opacity: 0.5
    },
    text: {
        color: 'white',
        padding: 8,
    }
  });
  

export default GoalItem;