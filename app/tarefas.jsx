import { getTarefas, updateTarefa } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CardTarefa } from "../components/CardTarefa";

export default function TelaTarefas() {
  const queryClient = useQueryClient();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });

  const updateMutation = useMutation({
    mutationFn: updateTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  function handleToggle(tarefa) {
    console.log("toggle executado", tarefa);
    updateMutation.mutate({
      ...tarefa,
      concluida: !tarefa.concluida,
    });
  }
  return (
    <View style={styles.container}>
      <Text>Tela de Tarefas</Text>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <CardTarefa tarefa={item} onToggle={handleToggle} />
        )}
      />
      {(isPending || error || isFetching) && (
        <View style={styles.statusbar}>
          {isPending && <Text>Carregando...</Text>}
          {error && <Text>Erro: {error.message}</Text>}
          {isFetching && <Text>Atualizando...</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusbar: {
    backgroundColor: "yellow",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
