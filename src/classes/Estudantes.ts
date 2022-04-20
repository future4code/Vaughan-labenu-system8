import { Usuarios } from "./Usuarios";

export class Estudantes extends Usuarios{
    hobbies: string[]

constructor(
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobbies: string[]
    ){
    super(nome, email, data_nasc, turma_id)
    this.hobbies = hobbies
}

}