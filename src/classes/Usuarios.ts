export class Usuarios {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string
    ){
        this.id = Date.now().toString(),
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }
}