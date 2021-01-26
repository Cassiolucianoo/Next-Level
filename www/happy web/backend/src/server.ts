import express from 'express';
const app = express();
app.use(express.json());


app.get('/users', (request, response) => {

   return response.json({message: 'Bom dia Cássio Luciano da Silva'});
});

app.listen(3333);

//Drive nativo, Query builder, ORM