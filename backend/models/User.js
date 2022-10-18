import { Sequelize } from "sequelize";
import sequelize from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.JSON,
    },
}, {
    freezeTableName: true
});

(async () => {
    await sequelize.sync();
})();

export default User;