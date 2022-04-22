import { Turma } from '../../classes/Turma'
import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const criarTurma = async (req: Request, res: Response): Promise<void> => {

    try {
        const id = Date.now().toString()
        const { nome, modulo } = req.body

        // const turma: Turma = new Turma(id, nome, modulo)
        
        await connection("TURMA")
            .insert({ id, nome, modulo })

        res.status(201).send({ message: "Turma criada com sucesso!" })

    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}