import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   // console.log('Ola mundo');
   return response.json({message: 'Bom dia Cássio Luciano da Silva'});
});

app.listen(3333);

//req / res
// localhost:3333

//aviso informação de instalação de pacote 
// yarn add @types/express -D

//instalação do typescript -D
//yarn add typescript -D


//Apos instalar o typescript criar o arquivo tsconfig.json  em seguida abrir o arquivo e alterar 
// target es2017    
//yarn tsc --init


//salvar e instalar um pacote chamado "pacote para ultilizar o projeto em typescript e node.js"
// yarn add ts-node-dev -D


//executando servidor node
//node src/server.ts


//json view no google crome