const livros = require('./database');
const readline = require('readline-sync');


//get input
const entrada = readline.question('Deseja buscar umm livro?S/N')

//if yes, show categories and ask  to choose one
if(entrada.toLocaleUpperCase()==='S'){
    console.log('Escolha uma categoria')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')
}


//if no, show all books ordered by page quantity