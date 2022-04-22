import { Request, Response } from 'express'
import { connection } from '../../data/connection'

export const mudarModuloTurma = async (req: Request, res: Response): Promise<void> => {

    let errorCode = 400

    try {
        const { modulo } = req.body
        const id = req.params.id

        if (modulo < 0 || modulo > 6) {
            errorCode = 422
            throw new Error("Módulo inválido. Insira um módulo de 0 à 6!")
        }

        if (!id) {
            errorCode = 422
            throw new Error("Turma não encontrada. O id inserido está inválido!")
        }

        if (typeof modulo !== "number") {
            errorCode = 422
            throw new Error("O módulo precisa ser um número!")
        }

        await connection("TURMA")
            .update({ modulo: modulo + 1 })
            .where({ id })

        res.status(201).send({ message: "Módulo alterado com sucesso!" })

    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}