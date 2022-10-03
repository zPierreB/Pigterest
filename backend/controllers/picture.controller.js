import Picture from "../models/picture.model.js";

import sequelize from "../config/db.js";

export const getAllPictures = async (req, res) => {
    
    try {
        const pictures =  await Picture.findAll();
        res.json(pictures);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const getPictureById = (req, res) => {

    sequelize.sync().then(() => {
        try {
            const pictures = Picture.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.json(pictures);
        } catch(error) {
            res.json({ message: error.message });
        }
    })
}

export const createPicture = (req, res) => {

    sequelize.sync().then(() => {
        try {
            Picture.create(req.body);
            res.json({"message": "Picture created"});
        } catch(error) {
            res.json({ message: error.message });
        }
    })
}

export const updatePicture = (req, res) => {

    sequelize.sync().then(() => {
        try {
            Picture.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.json({"message": "Picture updated"});
        } catch(error) {
            res.json({ message: error.message });
        }
    })
}

export const deletePicture = (req, res) => {

    sequelize.sync().then(() => {
        try {
            Picture.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json({"message": "Picture deleted"});
        } catch(error) {
            res.json({ message: error.message });
        }
    })
}