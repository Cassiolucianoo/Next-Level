import express from 'express';

const app = express();

app.use(express.json());



//métodos 

//rota = conjunto
//recurso = usuário

// métodos HTTP = GET, POST, PUT, DELETE


// GET = busca uma informação (Lista, intem )
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// parâmetros

//query params: http://localhost:3333/users?search=cassio
//route Params: http://localhost:3333/users/1 (indentifica um user )
//Body: http://localhost:3333/users (indentifica um user )

app.post('/users/:id', (request, response) => {
    //console.log('Ola mundo');
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
   return response.json({message: 'Bom dia Cássio Luciano da Silva'});
});

app.listen(3333);