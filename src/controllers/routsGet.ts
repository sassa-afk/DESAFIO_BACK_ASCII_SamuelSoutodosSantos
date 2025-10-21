import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';


export const routerGET = Router();

// http://localhost:3000/api/produtos
routerGET.get("/api/produtos", async (req: Request, res: Response): Promise<void> => {
  try {
    const produto = await ProdutoModel.findAll();
    return returnApiJson(
    	res, 
    	201, 
    	{  produto }
    );
  } catch (err) {
    return returnApiJson(
    	res, 
    	500, 
    	{ message: "Erro ao criar produto", err }
    );
  }
});

 
// http://localhost:3000/api/produtos/1
routerGET.get("/api/produtos/:id" , async  (req : Request , res: Response ): Promise<void> => {

	const { id } = req.params;	

	  if (!validarPassagenParametros(res, [id])) return;

	try{
		const produto = await ProdutoModel.findAll(
			{
				attributes : [ 'nome' , 'valor' , 'categoria' ] ,
				where: { id: id },
			}
		);

	    return returnApiJson(res, 200, {
	      message: "Resultado da pesquisa",
	      produto
	    });

	}
	catch( err ){

		    return returnApiJson(
		    	res, 
		    	500, 
		    	{ message: "Erro ao criar produto", err }
		    );

	}
});

