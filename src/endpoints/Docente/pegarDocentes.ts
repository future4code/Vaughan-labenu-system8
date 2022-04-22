import { Request, Response } from "express";
import { Docentes } from "../../classes/Docentes";
import { connection } from "../../data/connection";





export const pegarDocentes = async(req: Request, res: Response): Promise<void> => {
    try{
        const resultado = await connection("DOCENTE")

        res.status(201).send(resultado)
    }catch(error: any) {
        res.send({message: error.sqlMessage || error.message })
    }
}