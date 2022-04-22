import { Request, Response } from 'express';
import { connection } from '../../data/connection';

export const mudarEstudanteTurma = async (req: Request, res: Response): Promise<void> => {

    try {
        const turma_id = req.body.turma_id
        const idDoEstudante = req.params.idDoEstudante

        if (!turma_id || !idDoEstudante) {
            res.status(404)
            throw new Error("Um ou mais valores não foram enviados")
        }

        await connection("ESTUDANTE")
            .update({
                turma_id: turma_id
            })
            .where({
                id: idDoEstudante
            });

        res.status(200).send({ message: 'Classe do aluno alterada!' })

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado " })
    }
}
