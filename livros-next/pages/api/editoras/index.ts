import ControleEditora from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora: ControleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => { 
    if (req.method === 'GET') {
        try {
            const editoras: Array<object> = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } catch (error) {
            res.status(500).end("Execução ocorrida no servidor.");
        }
    } else {
        res.status(405).end("Método não permitido.");
    };
}

