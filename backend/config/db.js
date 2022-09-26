import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    `${process.env.DB_NAME}`,
    `${process.env.DB_USER}`,
    `${process.env.DB_PSWD}`,
    {
        host: `${process.env.DB_HOST}`,
        dialect: 'mysql'
    }
);

export default sequelize;