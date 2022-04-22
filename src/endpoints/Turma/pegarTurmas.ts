import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const pegarTurmas = async (req: Request, res: Response): Promise<void> => {

    try {
        const resultado = await connection("TURMA")

        res.status(201).send(resultado)

    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}