import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Picture = db.define("pictures", {
    alt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type :DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
}, {
    freezeTableName: true
});

export default Picture;