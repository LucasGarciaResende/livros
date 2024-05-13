import type {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Home.module.css'
import Livro from  '../classes/modelo/Livro';
import {useEffect, useState} from 'react';
import {Menu} from '../componentes/Menu';
import {LinhaLivro} from '../componentes/LinhaLivro';


const LivroLista: NextPage = () => {
    let [livros, setLivros] = useState<Livro[]>([]);
    let [carregado, setCarregado] = useState(false);

    useEffect(() => {
        obter().then((livros) => {
            setLivros(livros);
            setCarregado(true);
        });
    });

    
    const excluir = (codigo: number) => {
        excluirLivro(codigo).then(() => {
            setCarregado(false);
        });
    };

    return (
        <div className={styles.container}>
          <head>
            <title>Loja Next</title>
          </head>
          <Menu />
          <main>
            <h1>Catalogo de Livros</h1>
            <table>
                <thead className="cabecalho">
                    <tr>
                        <th className="titulos">Título</th>
                        <th className="titulos">Resumo</th>
                        <th className="titulos">Editora</th>
                        <th className="titulos">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir} 
                        />
            ))}
                </tbody>
            </table>
          </main>
        </div>
      );
    };

const baseURL: string = 'http://localhost:3000/api/livros';

const obter = async () => {
    const dadosLivros = await fetch(baseURL);
    const jsonLivros = await dadosLivros.json();
    return jsonLivros;
};

const excluirLivro = async (codigo: Number) => {
    const deleteLivros = await fetch(`${baseURL}/${codigo}`, {method: 'DELETE'});
    return deleteLivros.ok;
};

