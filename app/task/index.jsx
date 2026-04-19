import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";
import useTaskContext from "../../components/context/useTaskContext";

export default function Task() {
  const { tasks, deleteTask, toogleTaskCompleted } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => {
                  deleteTask(item.id);
                }}
                onToggleComplete={() => {
                  toogleTaskCompleted(item.id);
                }}
                OnPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title="Adicionar tarefa"
                  icon={<IconPlus />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },

  text: {
    fontSize: 26,
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },

  wrapper: {
    gap: 40,
    width: "90%",
  },

  inner: {
    gap: 8,
  },
});
