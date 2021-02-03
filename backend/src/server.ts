import express from 'express';
import {getRepository} from 'typeorm';
import orphanages from './models/Orphanage';

//importando a iniciallização do database
import './database/connection';
import Orphanages from './models/Orphanage';

const app = express();
app.use(express.json());


app.post('/orphanages', async (request, response) => {
   console.log(request.body);
   const{

      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,

   }= request.body;

   const orphanagesRepository = getRepository(Orphanages);

   const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
   });

   await orphanagesRepository.save(orphanage);

   return response.json({message: 'Bom dia Cássio Luciano da Silva'});
   
  
});



app.listen(3333);

//Drive nativo, Query builder, ORM