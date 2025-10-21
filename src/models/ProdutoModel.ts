import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';


	export const ProdutoModel = sequelize.define('Produto',

	{
		id:{ 
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nome:{
		    type: DataTypes.STRING,
		    allowNull: false ,
		},
		valor:{ 
			type: DataTypes.DOUBLE,
			allowNull: false ,
		},
		categoria:{ 
			type: DataTypes.STRING, 
			allowNull: false , 
		},
	}, 

	
	{ 
		tableName : 'produtos' ,
		 timestamps: false, 
	}

);