import { Request, Response } from "express";
import { Docentes } from "../classes/Docentes";
import { connection } from "../data/connection";





export const mudarDocenteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const { turma_id, docente_id } = req.body;

        await connection("DOCENTE")
            .update({
                turma_id: turma_id
            })
            .where({
                id: docente_id
            })

        res.status(200).send({ message: "Docente foi movido com sucesso!" })
    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}