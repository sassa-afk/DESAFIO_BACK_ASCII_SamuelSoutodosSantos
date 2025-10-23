import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';
 import { swaggerUi, specs } from "../swagger.js";



export const routerGET = Router();


// http://localhost:3000/api/produtos
/**
 * @swagger
 * /api/produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       201:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               produto:
 *                 - id: 1
 *                   nome: "Refrigerante Coca Cola"
 *                   valor: 10.5
 *                   categoria: "Cozinha"
 *       500:
 *         description: Erro interno ao acessar API
 */
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

/**
 * @swagger
 * /api/produtos/{id}:
 *   get:
 *     summary: Lista um produto conforme o ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser buscado
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Produto retornado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               message: "Resultado da pesquisa"
 *               produto:
 *                 - id: 1
 *                   nome: "Refrigerante Coca Cola"
 *                   valor: 10.5
 *                   categoria: "Cozinha"
 *       400:
 *         description: Parâmetro inválido ou ausente
 *       500:
 *         description: Erro interno ao acessar API
 */
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

