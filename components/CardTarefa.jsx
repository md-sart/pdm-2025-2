import { StyleSheet, Switch, Text, View } from "react-native";

export function CardTarefa({ tarefa, onToggle }) {
  return (
    <View style={styles.card}>
      <Text>{tarefa.descricao}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tarefa.concluida ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={tarefa.concluida}
        onValueChange={() => onToggle(tarefa)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    height: 100,
    padding: 5,
    margin: 5,
  },
});
