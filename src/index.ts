import { app } from "./app";
import { criarDocente } from "./endpoints/Docente/criarDocente";
import { mudarDocenteTurma } from "./endpoints/Docente/mudarDocenteTurma";
import { pegarDocentes } from "./endpoints/Docente/pegarDocentes";


app.post("/docentes", criarDocente);

app.get("/docentes", pegarDocentes);

app.put("/docentes", mudarDocenteTurma);






