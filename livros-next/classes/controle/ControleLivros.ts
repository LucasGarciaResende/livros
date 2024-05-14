import Livro from "../modelo/Livro";

var livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java', autores: ['Bert Bates', 'Kathy Sierra', 'Cay Horstman']},
    {codigo: 2, codEditora: 2, titulo: 'Java: Como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', autores: ['Paul Deitel', 'Harvey Deitel']},
    {codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Core Java® for the Impatient is a complete but concise guide to Java SE 8. Written by Cay Horstmann—the author of Java SE 8 for the Really Impatient and Core Java™', autores: ['Cay Horstmann']}
];

class ControleLivros {
    obterLivros(): Promise<Array<Livro>> {
        return Promise.resolve(livros);
    }
    async incluir(livro: Livro) {
        livro.codigo = livros.length + 1;
        livros.push(livro);
    }
    excluir(codigo: number) {
        livros.splice(livros.findIndex(livro => livro.codigo === codigo), 1);
    }
}

export default ControleLivros;