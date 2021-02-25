import express from 'express';


//importando a iniciallização do database
import './database/connection';

import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);





app.listen(3333);

//Drive nativo, Query builder, ORM