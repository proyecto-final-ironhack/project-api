const express = require('express');
const router = express.Router();
const faceController = require('../controllers/face.controller');


router.post('/', faceController.faceRecognition);


module.exports = router;