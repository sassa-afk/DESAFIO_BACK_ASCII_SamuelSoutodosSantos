import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros , validarExistenciaBody } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';


export const routerPUT = Router();



// PUT /api/produtos/{id}
// body : { "campo":"nome" , "novoValor" : "Refrigerante Coca Cola"}
/**
 * @swagger
 * /api/produtos/{id}:
 *   put:
 *     summary: Atualiza um campo específico de um produto existente
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto que será atualizado
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             campo: "nome"
 *             novoValor: "Refrigerante Pepsi"
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso ou produto não encontrado
 *         content:
 *           application/json:
 *             examples:
 *               sucesso:
 *                 summary: Atualização bem-sucedida
 *                 value:
 *                   message: "Item atualizado com sucesso"
 *               naoEncontrado:
 *                 summary: Produto não encontrado
 *                 value:
 *                   message: "Item apontado para atualização não existe"
 *               campoInvalido:
 *                 summary: Campo indicado inexistente
 *                 value:
 *                   msg: "Campo indicado no corpo da api inexistente"
 *       400:
 *         description: Parâmetros inválidos ou corpo da requisição incorreto
 *       500:
 *         description: Erro interno ao atualizar o produto
 */

routerPUT.put( "/api/produtos/:id" , async (req : Request , res : Response ) : Promise<void> =>{

 	const { id } = req.params;	

 	if (!validarPassagenParametros(res, [id])) return;

    if (!validarExistenciaBody( req.body, res)) return;


	const { campo , novoValor } = req.body ;
	if( !validarPassagenParametros ( res , [ campo , novoValor ] )) return ;


	if( campo === "nome" || campo === "valor" || campo === "categoria" ){

		try{
			const [produto] = await ProdutoModel.update(
				{ [campo]: novoValor },
				{ where: { id: id } },

			);

			if( produto > 0 ){

		    	return returnApiJson( res, 200, { message: "Item atualizado com sucesso" } );
			}else{
				return returnApiJson( res, 200, { message: "Item apontado para atualização não existe" } );
			}

		}catch(err){

		    return returnApiJson( res, 500, { message: "Erro ao criar produto", err } );
		
		}
	}
	
	returnApiJson( res , 200 , {msg : " Campo indicado no corpo da api inexistente "} );
	return ;
});


 