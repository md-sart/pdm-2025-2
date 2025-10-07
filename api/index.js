import axios from "axios";

const headerJson = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "aos-postgree-express-awijmuxv4-marias-projects-ed92f867.vercel.app",
  timeout: 1000,
  headers: {
    "X-Parse-Application-Id": "lzQ61WWmjSxYma4dOZSVhO5Ofo9HQ0WaXT1bTRyY",
    "X-Parse-JavaScript-Key": "VzOBLroXdlFsuyozWeDEVGHSB4PGNJkpTbXUeSWk",
  },
});

export async function getTarefas() {
  const { data } = await instance.get("/classes/Tarefa");
  return data?.results;
}

export async function updateTarefa(tarefa) {
  const { data } = await instance.put(
    `/classes/Tarefa/${tarefa.objectId}`,
    { descricao: tarefa.descricao, concluida: tarefa.concluida },
    { headers: headerJson }
  );
  return data;
}

export async function addTarefa({ descricao }) {
  const { data } = await instance.post(
    `/classes/Tarefa`,
    { descricao },
    { headers: headerJson }
  );
  return data;
}

export async function deleteTarefa(tarefa) {
  const { data } = await instance.delete(`/classes/Tarefa/${tarefa.objectId}`);
  return data;
}
