import Picture from "../models/Picture.js";

export const getAllPictures = async (req, res) => {
    
    try {
        const pictures =  await Picture.findAll();
        res.json(pictures);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const getPictureById = async (req, res) => {

    try {
        const picture = await Picture.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(picture);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const createPicture = (req, res) => {

    try {
        Picture.create(req.body);
        res.json({"message": "Picture created"});
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const updatePicture = (req, res) => {

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
}

export const deletePicture = (req, res) => {

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
}