import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function TelaTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await fetch(
          "https://parseapi.back4app.com/classes/Tarefa",
          {
            headers: {
              "X-Parse-Application-Id":
                "lzQ61WWmjSxYma4dOZSVhO5Ofo9HQ0WaXT1bTRyY",
              "X-Parse-JavaScript-Key":
                "VzOBLroXdlFsuyozWeDEVGHSB4PGNJkpTbXUeSWk",
            },
          }
        );
        const data = await response.json();
        setTarefas(data.results);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTarefas();
  }, []);

  return (
    <View>
      <Text>Tela de Tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => <Text>{item.descricao}</Text>}
      />
    </View>
  );
}
