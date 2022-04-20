import { Usuarios } from "./Usuarios";

export class Docentes extends Usuarios{
constructor(
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
    ){
    super(nome, email, data_nasc, turma_id)
}

}