import { Pressable, StyleSheet, Text } from "react-native";

export const FocusButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    padding: 8,
    backgroundColor: "#b872ff",
  },

  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
});
