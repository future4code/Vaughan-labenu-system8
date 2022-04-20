export class Turma {
    id: string;
    nome: string;
    modulo: string;

constructor(
    nome: string,
    modulo: string
    ){
    this.id = Date.now().toString(),
    this.nome = nome,
    this.modulo = modulo
}

}
