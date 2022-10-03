import { Sequelize } from "sequelize";
import sequelize from "../config/db.js";

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
        type :DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
}, {
    freezeTableName: true
});

export default Picture;