const visionService = require('../services/vision.service');

module.exports.imageRecognition = (req, res, next) => {
    const { photo } = req.body;
    visionService.getLabel(photo)
        .then((annotation) => {
            res.json({
                "It is": annotation.description
            });
        })
        .catch(next);

}

module.exports.imageUpload = (req, res, next) => {
    res.json({ secure_url: req.file.secure_url });
}

