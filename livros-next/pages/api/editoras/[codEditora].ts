import {controleEditora} from '.'
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method === 'GET') {
        try {
            const {codEditora} = req.query;
            const editora = controleEditora.getNomeEditora(Number(codEditora));
            res.status(200).json(editora);
        } catch (error) {
            res.status(500).end("Execução ocorrida no servidor.");
        }
    } else {
        res.status(405).end("Método não permitido.");
    }

}