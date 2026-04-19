import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TasksProvider } from "../components/context/TaskProvider";

export default function Layout() {
  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#021123",
            },

            headerStyle: {
              backgroundColor: "#021123",
            },

            headerTintColor: "#fff",

            drawerLabelStyle: {
              color: "#fff",
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="add-task/index"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#fff"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/task")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="pomodoro"
            options={{
              drawerLabel: "Timer",
              title: "",
            }}
          />
          <Drawer.Screen
            name="task/index"
            options={{
              drawerLabel: "Lista de tarefas",
              title: "",
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
