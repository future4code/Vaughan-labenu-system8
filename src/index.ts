import { app } from "./app";
import { buscarEstudante } from "./endpoints/Estudantes/buscarEstudante";
import { criarEstudante } from "./endpoints/Estudantes/criarEstudante";
import { mudarEstudanteTurma } from "./endpoints/Estudantes/mudarEstudanteTurma";

app.post ("/estudantes",criarEstudante)
app.get ("/estudantes/:nome",buscarEstudante)
app.put ("/estudantes/:idDoEstudante",mudarEstudanteTurma)