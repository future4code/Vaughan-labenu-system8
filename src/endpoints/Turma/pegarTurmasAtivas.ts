import { Turma } from '../../classes/Turma'
import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const pegarTurmasAtivas = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400

    try {
        const turmas = await connection("TURMA")
            .select()
            .where("TURMA.modulo", ">", "0")

        res.status(200).send({ "Turmas Ativas": turmas })
    }

    catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}