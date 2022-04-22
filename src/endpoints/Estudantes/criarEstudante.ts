import { Estudantes } from "../../classes/Estudantes";
import {Request, Response } from "express";
import {connection} from "../../data/connection"

export const criarEstudante= async (req: Request, res: Response):Promise<void>=>{
   try {
       
       const id = Date.now().toString()
       const {nome,email,dataNasc,turma_id}= req.body
       let data_nasc = dataNasc.split('/').reverse().join('-');
    //    const estudantes:Estudantes = new Estudantes (id,nome,email,data,hobbies)

       await connection("ESTUDANTE").insert({id,nome,email,data_nasc,turma_id});
         res.status(201).send("Estudante Criado!");

   }catch (error:any) {
      res.status(500).send(error.sqlMessage || error.message);
   }
}