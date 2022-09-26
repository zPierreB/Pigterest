import express from 'express';

import {
    getAllPictures,
    getPictureById,
    createPicture,
    updatePicture,
    deletePicture
} from '../controller/picture.controller.js';

const router = express.Router();

router.get('/', getAllPictures);
router.get('/:id', getPictureById);
router.post('/', createPicture);
router.put('/:id', updatePicture);
router.delete('/:id', deletePicture);

export default router;