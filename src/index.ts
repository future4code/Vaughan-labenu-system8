import { app } from "./app"
import {Turma} from "./classes/Turma"
import {criarTurma} from "./endpoints/criarTurma"
import {buscarTurmasAtivas} from "./endpoints/buscarTurmasAtivas"

app.get ("/turmas/ativas", buscarTurmasAtivas)

app.post ("/turmas", criarTurma)

app.put ("/turmas", criarTurma)