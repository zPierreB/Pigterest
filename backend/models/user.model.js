import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db";

// const { DataTypes } = Sequelize;

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    freezeTableName: true
});

export default User;