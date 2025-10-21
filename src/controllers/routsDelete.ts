import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros , validarExistenciaBody } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';


export const routerDELETE = Router();

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