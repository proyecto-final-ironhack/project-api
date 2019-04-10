const faceService = require('../services/face.service');

module.exports.faceRecognition = (req, res, next) => {
    const { photo } = req.body;
    faceService.getExpression(photo)
        .then((annotation) => {
            res.json({
                joyLikelihood: annotation.joyLikelihood
            });
        })
        .catch(next);

}