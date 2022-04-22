import { Turma } from '../../classes/Turma'
import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const criarTurma = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400

    try {
        const id = Date.now().toString()
        const { nome, modulo } = req.body

        if (!nome || !modulo) {
            errorCode = 422
            throw new Error("Todos os campos precisam ser preenchidos!")
        }

        if (!nome) {
            errorCode = 422
            throw new Error("É necessário inserir o nome da turma!")
        }

        if (modulo != 0) {
            errorCode = 422
            throw new Error("O módulo inicial precisa ser igual à 0!")
        }

        await connection("TURMA")
            .insert({ id, nome, modulo })

        res.status(201).send({ message: "Turma criada com sucesso!" })

    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}