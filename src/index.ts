import { app } from "./app"
import { pegarTurmasAtivas } from "./endpoints/Turma/pegarTurmasAtivas"
import { pegarTurmas } from "./endpoints/Turma/pegarTurmas"
import { criarTurma } from "./endpoints/Turma/criarTurma"
import { mudarModuloTurma } from './endpoints/Turma/mudarModuloTurma'
import { criarDocente } from "./endpoints/criarDocente"
import { mudarDocenteTurma } from "./endpoints/mudarDocenteTurma"
import { pegarDocentes } from "./endpoints/pegarDocentes"


app.post("/docentes", criarDocente)

app.get("/docentes", pegarDocentes)

app.put("/docentes", mudarDocenteTurma)

app.get("/turmas", pegarTurmas)

app.get("/turmas/ativas", pegarTurmasAtivas)

app.post("/turmas", criarTurma)

app.put("/turmas/:id", mudarModuloTurma)