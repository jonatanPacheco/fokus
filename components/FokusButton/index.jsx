import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline }) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    padding: 8,
    backgroundColor: "#b872ff",
    flexDirection: "row",
    gap: "12",
    alignItems: "center",
    justifyContent: "center",
  },

  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#b872ff",
    borderWidth: 2,
  },

  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    marginLeft: 8,
  },

  outlineButtonText: {
    color: "#b872ff",
  },
});
