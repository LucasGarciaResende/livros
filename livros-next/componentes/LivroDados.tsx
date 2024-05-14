import type {NextPage} from 'next'; 
import styles from '../styles/Home.module.css'
import Livro from  '../classes/modelo/Livro';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {useNavigate, } from "react-router-dom";
import ControleEditora from '../classes/controle/ControleEditora';
import ControleLivros from '../classes/controle/ControleLivros';
import {Menu} from '../componentes/Menu'

const baseUrl = "http://localhost:3000/api/livros";
const LivroDados: NextPage = () => {
    let controleLivro = new ControleLivros();
    let controleEditora = new ControleEditora();
    let Router = useRouter();
    let opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora, text: editora.nome}));
    let [titulo, setTitulo] = useState('');
    let [resumo, setResumo] = useState('');
    let [autores, setAutores] = useState('');
    let [codEditora, setCodEditora] = useState(opcoes[0].value);
    let navigate = useNavigate();
    let tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    }
    let incluir = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let livro = {
            codigo: 0,
            titulo,
            resumo,
            codEditora,
            autores: autores.split("\n")
        }
        incluirLivro(livro);
        Router.push("LivroLista");
    }

    return (
        <div className="styles conteiner">
            <head>
                <title>Loja Next</title>
            </head>
            <Menu />
            <main>
                <h1>Dados do Livros</h1>
                <form onSubmit={incluir}>
                     <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" className="form-control" onChange={(event) => setTitulo(event.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea cols={30} rows={3} onChange={(event) => setResumo(event.target.value)} className="form-control"></textarea>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="codEditora">Editora:</label>
                        <select
                            id="codEditora"
                            className="form-control"
                            value={codEditora}
                            onChange={tratarCombo}
                        >
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="autores">Autores:</label>
                        <textarea cols={30} rows={3} onChange={(event) => setAutores(event.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="botao">Salvar Dados</button>
                    </div>
                </form>
            </main>
        </div>
    )
};

const incluirLivro = async (livro: Livro) => {
    const dadosLivros = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    });
    return dadosLivros.ok;
}
