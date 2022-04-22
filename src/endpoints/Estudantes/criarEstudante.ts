import { Request, Response } from "express";
import { connection } from "../../data/connection"

export const criarEstudante = async (req: Request, res: Response): Promise<void> => {

   try {
      const id = Date.now().toString()
      const { nome, email, dataNasc, turma_id } = req.body
      const data_nasc = dataNasc.split('/').reverse().join('-')
      
      await connection("ESTUDANTE").insert({ id, nome, email, data_nasc, turma_id })

      res.status(201).send("Estudante Criado!")

   } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
   }
}