import { app } from "./app";
import { criarDocente } from "./endpoints/criarDocente";
import { mudarDocenteTurma } from "./endpoints/mudarDocenteTurma";
import { pegarDocentes } from "./endpoints/pegarDocentes";


app.post("/docentes", criarDocente);

app.get("/docentes", pegarDocentes);

app.put("/docentes", mudarDocenteTurma);






