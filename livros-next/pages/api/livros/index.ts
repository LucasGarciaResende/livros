import ControleLivros from "@/classes/controle/ControleLivros";
import {NextApiRequest, NextApiResponse} from "next";

export const controleLivro: ControleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const livro = controleLivro.obterLivros();
        res.status(200).json(livro);
    } else if (req.method === 'POST') {
        try {
          const dados = req.body.livro;
          const livro = controleLivro.incluir(dados);
          res.status(200).json(livro);
        } catch (error) {
          res.status(500).end("Execução ocorrida no servidor.");
      }
    } else {
        res.status(405).end("Método não permitido.");
    }
};
