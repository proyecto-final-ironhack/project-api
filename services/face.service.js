require('dotenv').config();
const axios = require('axios');

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

module.exports.getExpression = (photo) => {  
    return axios.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBD_cOR_JAxWx5tbcaYK-9IFUS4-GVjv8E', {
        requests: [
            {
                image: {
                    content: photo
                },
                features:[{ type: "FACE_DETECTION" }]
            }
        ]
    })
    .then(({ data })    => {
        if (data.responses && data.responses.length > 0) {
            return data.responses[0].faceAnnotations[0]
        } else {
            return {
                joyLikelihood: 'unknown'
            }
        }
    })
}
