import { Router , Request  , Response} from 'express';
import { returnApiJson  , validarPassagenParametros , validarExistenciaBody } from '../utils/funcoesDefalt.js';
import { ProdutoModel } from '../models/ProdutoModel.js';


export const routerPUT = Router();



// PUT /api/produtos/{id}
// body { "campo":"nome" , "novoValor" : "Refrigerante Coca Cola"}
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


 