import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('process.env.dba', 'process.env.user', 'process.env.pass', {
  host: 'process.env.host',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: { require: true,rejectUnauthorized: false // importante para evitar erro de certificado autoassinado}
  },
  logging: false,
});
