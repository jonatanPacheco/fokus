import { router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";

export default function AddTask() {
  const [description, setDescription] = useState();

  const { addTask } = useTaskContext();

  const submitTask = () => {
    if (!description) {
      return;
    }
    addTask(description);
    setDescription("");
    router.navigate("/task");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar Tarefa:</Text>
          <Text style={styles.label}>Em que você está trabalhando?</Text>
          <TextInput
            numberOfLines={10}
            multiline={true}
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={submitTask}>
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 16,
    paddingTop: 32,
  },

  inner: {
    gap: 32,
    backgroundColor: "#98a0a8",
    padding: 16,
    width: "90%",
    borderRadius: 8,
    color: "#021123",
  },

  text: {
    fontSize: 26,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    height: 100,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
