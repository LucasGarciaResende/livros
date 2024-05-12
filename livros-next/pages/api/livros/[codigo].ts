import {controleLivro} from ".";
import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        try {
            const {codigo} = req.query;
            const livro = controleLivro.excluir(Number(codigo));
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).end("Execução ocorrida no servidor.");
        }
    } else {
    res.status(405).end("Método não permitido.");
    }
}
