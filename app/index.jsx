import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={require("./pomodoro.png")}
        resizeMode="contain"
      />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },

  banner: {
    width: "60%",
    height: "50%",
  },

  actions: {
    padding: 24,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    backgroundColor: "#14448080",
    width: "80%",
    gap: 24,
  },

  timer: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

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

  footer: {
    width: "80%",
  },

  footerText: {
    textAlign: "center",
    color: "#98a0a8",
    fontSize: 12.5,
  },
});
