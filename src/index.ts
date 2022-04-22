import { app } from "./app"
import { pegarTurmasAtivas } from "./endpoints/Turma/pegarTurmasAtivas"
import { pegarTurmas } from "./endpoints/Turma/pegarTurmas"
import { criarTurma } from "./endpoints/Turma/criarTurma"
import { mudarModuloTurma } from './endpoints/Turma/mudarModuloTurma'
import { criarDocente } from "./endpoints/Docente/criarDocente";
import { mudarDocenteTurma } from "./endpoints/Docente/mudarDocenteTurma";
import { pegarDocentes } from "./endpoints/Docente/pegarDocentes";
import { buscarEstudante } from "./endpoints/Estudantes/buscarEstudante";
import { criarEstudante } from "./endpoints/Estudantes/criarEstudante";
import { mudarEstudanteTurma } from "./endpoints/Estudantes/mudarEstudanteTurma";

//TURMAS
app.get("/turmas", pegarTurmas)

app.get("/turmas/ativas", pegarTurmasAtivas)

app.post("/turmas", criarTurma)

app.put("/turmas/:id", mudarModuloTurma)

//DOCENTES
app.post("/docentes", criarDocente)

app.get("/docentes", pegarDocentes)

app.put("/docentes", mudarDocenteTurma)

//ESTUDANTES
app.get ("/estudantes/:nome",buscarEstudante)

app.post ("/estudantes",criarEstudante)

app.put ("/estudantes/:idDoEstudante",mudarEstudanteTurma)
