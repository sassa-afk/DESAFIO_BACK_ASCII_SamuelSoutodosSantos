import { Router , Request , Response } from 'express' ;
import { returnApiJson  , validarPassagenParametros , 	validarExistenciaBody  } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';
import { swaggerUi, specs } from "../swagger.js";

export const routerPOST = Router(); 


/**
 * @swagger
 * /api/produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Refrigerante Coca Cola"
 *             valor: 10.5
 *             categoria: "Cozinha"
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               message: "Produto criado com sucesso"
 *               produto:
 *                 id: 1
 *                 nome: "Refrigerante Coca Cola"
 *                 valor: 10.5
 *                 categoria: "Cozinha"
 *       400:
 *         description: Corpo da requisição inválido ou parâmetros ausentes
 *       500:
 *         description: Erro interno ao criar o produto
 */
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
	    	{ 
	    		message: "Produto criado com sucesso", 
	    		produto:  produto.get(),

	    	}
	    );
	}catch( err ){
		    return returnApiJson(
		    	res, 500, { message: "Erro ao criar produto", err }
		    );

	}
});


 