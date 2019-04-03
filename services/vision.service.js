require('dotenv').config();


const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


module.exports.getLabel = (photo) => {
quickstart(photo);
}

async function quickstart(photo){
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection(photo);
    const labels = result.labelAnnotations;
    return(labels[0].description);
}

