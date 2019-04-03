const visionService = require('../services/vision.service');


module.exports.imageRecognition = () => {
visionService.getLabel(photo)
    .then( () => {
    return Promise.resolve();
    })
    .catch(error => console.log('vision controller error'));

}

module.exports.imageUpload = (req, res, next) => {
    res.json({ secure_url: req.file.secure_url });
}
