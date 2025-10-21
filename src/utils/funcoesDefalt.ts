import { Response } from 'express';

export function returnApiJson(res: Response, status: number, messageJson: object): void {
  res.status(status).json(messageJson);
}

export function validarPassagenParametros ( res:Response , vetor : any []  ): any {

	if(!vetor || vetor.length === 0 ){
		return returnApiJson( res , 400 , { "message" : `Parâmetros obrigatorios ausentes` } );
		
	}

	for( let i of vetor ){
		if( i === null || i === undefined || i === '' || !i ){
			return returnApiJson( res , 400 , { "message" : `Parâmetros enviados inválidos` } );
			
		}
	}

	return true ;
}
 
export function validarExistenciaBody(body: any, res: Response): any {
	if (!body || Object.keys(body).length === 0) {
        return returnApiJson(res, 400, { message: "Body indicado ausente" });        
    } 
    return true;
}


	// if (!req.body || Object.keys(req.body).length === 0) {
    //     returnApiJson( res, 400, { message: "Body inválido ou ausente" });
    //     return;
    // }