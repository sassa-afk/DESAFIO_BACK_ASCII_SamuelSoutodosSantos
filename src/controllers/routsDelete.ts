import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros , validarExistenciaBody } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';
export const routerDELETE = Router();



/**
 * @swagger
 * /api/produtos/{id}:
 *   delete:
 *     summary: Remove um produto existente pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto que será deletado
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               message: "Produto deletado com sucesso"
 *       400:
 *         description: ID ausente ou produto não encontrado
 *         content:
 *           application/json:
 *             examples:
 *               idAusente:
 *                 summary: ID não informado
 *                 value:
 *                   message: "Parâmetro 'id' ausente. Essa rota exige um ID para funcionar."
 *               produtoNaoEncontrado:
 *                 summary: Produto não encontrado
 *                 value:
 *                   message: "Produto não encontrado"
 *       500:
 *         description: Erro interno ao deletar o produto
 *         content:
 *           application/json:
 *             example:
 *               message: "Erro ao deletar o produto"
 */


routerDELETE.delete("/api/produtos/:id", async  (req: Request, res: Response): Promise<void> => {

	const { id } = req.params;

    if (!id) {
        returnApiJson(res, 400, { message: "Parâmetro 'id' ausente. Essa rota exige um ID para funcionar." });
        return;
    }

	if( !validarPassagenParametros ( res , [id] )) return ;

	try{

		const produto = await ProdutoModel.findByPk(id)
		if(!produto){
			returnApiJson(res, 400, { message: "Produto não encontrado" });
			return ;
		}

		await produto.destroy();
		return returnApiJson(res, 200, { message: "Produto deletado com sucesso" });


	}catch(err){
		return returnApiJson( res, 500, { message: "Erro ao deletar o produto : ", err } );
	};

});