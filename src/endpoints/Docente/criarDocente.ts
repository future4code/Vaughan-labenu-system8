import { Request, Response } from "express"
import { Docentes } from "../../classes/Docentes"
import { connection } from "../../data/connection"

export const criarDocente = async (req: Request, res: Response): Promise<void> => {

    let errorCode: number = 400

    try {
        const { nome, email, dataNasc, turma_id } = req.body

        if (!nome || !email || !dataNasc || !turma_id) {
            errorCode = 422
            throw new Error("Todos os campos do body precisam ser preenchidos!")
        }

        const id = Date.now().toString()

        const data_nasc = dataNasc.split('/').reverse().join('-')

        const docente: Docentes = new Docentes(id, nome, email, dataNasc, turma_id)

        await connection("DOCENTE").insert({ id, nome, email, data_nasc, turma_id })

        res.status(201).send({ message: "Docente criado!" })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
}