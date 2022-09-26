import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db";

const { DataTypes } = Sequelize;

const Picture = sequelize.define("pictures", {
    alt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type :DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Picture;