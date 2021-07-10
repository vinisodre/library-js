const livros = require('./database');
const readline = require('readline-sync');


//get input
const entrada = readline.question('Deseja buscar umm livro?S/N')

//if yes, show categories and ask  to choose one
if(entrada.toLocaleUpperCase()==='S'){
    console.log('Escolha uma categoria')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno);
} else{
  const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
  console.log('Essas são todas as categorias.')
  console.table(livrosOrdenados)
}


//if no, show all books ordered by page quantity