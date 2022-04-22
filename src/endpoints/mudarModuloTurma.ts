import { Turma } from '../classes/Turma'
import { Request, Response } from 'express'
import { connection } from '../data/connection'

export const mudarModuloTurma = async (req: Request, res: Response): Promise<void> => {

    const token = req.headers.authorization
    const turma_id: string = req.params.id
    const modulo: string = req.body.modulo
    let errorCode: number = 400

    try {

        if (!token) {
            errorCode = 401
            throw new Error("É necessário passar um token de autorização!")
        }

        if (!modulo) {
            errorCode = 401
            throw new Error("Módulo não informado. É necessário informar o módulo da turma!")
        }

        if (modulo < "0" || modulo > "6") {
            errorCode = 404
            throw new Error("Módulo inválido. Informar um módulo entre 0 e 6!")
        }

        const buscarTurma = await connection('TURMA')
            .select()
            .update('TURMA.modulo', `${modulo}`)
            .where('TURMA.id', `${turma_id}`)

        if (!buscarTurma) {
            errorCode = 404
            throw new Error("Turma não encontrada, o id informado está válido!")
        }

        res.status(200).send()

    } catch (error: any) {
        res.status(errorCode).send({message: error.sqlMessage || error.message })
    }
}