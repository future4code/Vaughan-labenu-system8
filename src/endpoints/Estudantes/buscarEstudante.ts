import { Request, Response } from 'express';
import { connection } from '../../data/connection';

export const buscarEstudante = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try {
        const nome: string = req.params.nome
        const resultado = await connection("ESTUDANTE")
        .where("nome", "like", `%${nome}%`)

        if(resultado.length === 0){
            errorCode = 404
            throw new Error('Estudante não encontrado!')
        }

        resp.status(200).send(resultado[0])
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}