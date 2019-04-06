const express = require('express');
const router = express.Router();
const visionController = require('../controllers/vision.controller');
const uploader = require('../configs/storage.config');

router.get('/', visionController.imageRecognition);
router.post('/', visionController.imageRecognition);
//router.post('/', uploader.single("imageUrl"), visionController.imageUpload);

module.exports = router;