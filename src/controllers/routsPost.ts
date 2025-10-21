import { Router , Request , Response } from 'express' ;
import { returnApiJson  , validarPassagenParametros , 	validarExistenciaBody  } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';

export const routerPOST = Router(); 


// http://localhost:3000/api/produtos

routerPOST.post("/api/produtos", async (req: Request, res: Response) => {

    if (!validarExistenciaBody( req.body, res)) return;

	const { nome, valor, categoria } = req.body ;

    if (!validarPassagenParametros(res, [ nome, valor, categoria ])) return;

	try{
	    const produto = await ProdutoModel.create({ nome, valor, categoria });
	    return returnApiJson(
	    	res, 
	    	201, 
	    	{ message: "Produto criado com sucesso", produto }
	    );
	}catch( err ){
		    return returnApiJson(
		    	res, 
		    	500, 
		    	{ message: "Erro ao criar produto", err }
		    );

	}


});


 