require('dotenv').config();

async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./perro.jpg');
    const labels = result.labelAnnotations;
    console.log(labels[0].description);
    
}

quickstart();