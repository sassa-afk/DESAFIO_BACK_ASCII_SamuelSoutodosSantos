import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.dba as string,
  process.env.user as string,
  process.env.pass as string,
  {
    host: process.env.host,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // importante para evitar erro de certificado autoassinado
      },
    },
    logging: false,
  }
);
