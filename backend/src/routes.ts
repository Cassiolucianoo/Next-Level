import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
const routes = Router();

//mvc

//model
//views
//controllers


routes.post('/orphanages', async (request, response) => {
    console.log(request.body);
    
    
   
 });

 export default routes;