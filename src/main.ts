import express from 'express';
import { returnApiJson } from './utils/funcoesDefalt.js';

import { routerGET } from './controllers/routsGet.js';
import { routerPOST } from './controllers/routsPost.js';
import { routerPUT } from './controllers/routsPut.js';
import { routerDELETE } from './controllers/routsDelete.js';
import { setupSwagger } from "./swagger.js";



const app = express();
const PORT = 3000;


app.use(express.json());
app.use('/', routerGET); 
app.use('/', routerPOST); 
app.use('/', routerPUT); 
app.use('/', routerDELETE); 

setupSwagger(app);




app.listen(PORT, (): void => {
  console.log(`## Servidor iniciado na porta ${PORT}`);
});


 