import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dba01', 'sassa', '9CgOrn0eQMUIkysCcuNLOSHGxGU4S5d3', {
  host: 'dpg-d3pg9c8dl3ps73b5fvp0-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // importante para evitar erro de certificado autoassinado
    }
  },
  logging: false,
});
