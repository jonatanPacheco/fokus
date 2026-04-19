import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((t) => t.id == id);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (!description) return;
    updateTask(task.id, description);
    router.navigate("/task");
  };

  return (
    <View style={styles.container}>
      <Text> Editar tarefa:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
      <Pressable onPress={handleSave} style={styles.button}>
        <IconSave />
        <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    minHeight: 100,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
