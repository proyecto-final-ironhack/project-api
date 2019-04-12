require('dotenv').config();
const axios = require('axios');

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

module.exports.getLabel = (photo) => {  
    return axios.post(GOOGLE_AXIOS, {
        requests: [
            {
                image: {
                    content: photo
                },
                features:[{ type:"LABEL_DETECTION", maxResults:1 }]
            }
        ]
    })
    .then(({ data })    => {
        if (data.responses && data.responses.length > 0) {
            return data.responses[0].labelAnnotations[0]
        } else {
            return {
                description: 'unknown'
            }
        }
    })
}
