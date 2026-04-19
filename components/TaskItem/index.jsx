import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconDelete, IconPencil } from "../Icons";

export default function TaskItem({
  completed,
  text,
  onToggleComplete,
  OnPressEdit,
  onPressDelete,
}) {
  const cardStyles = [styles.card];

  if (completed) {
    cardStyles.push(styles.cardCompleted);
  }

  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={OnPressEdit}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconDelete />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#98A0A8",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },

  cardCompleted: {
    backgroundColor: "#0F725C",
  },

  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});
