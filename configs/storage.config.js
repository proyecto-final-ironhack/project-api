
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'pictures',
  allowFormats: ['jpg', 'png'],
  filename: (req, file, next) => {
    next(null, `${Date.now()}${file.originalname}`)
  }
})

// Sample upload code Node.js

// cloudinary.uploader.upload("sample.jpg", 
// {"crop":"limit","tags":"samples","width":3000,"height":2000}
// , function(result) { console.log(result) });

// Sample image manipulation tag Node.js

// cloudinary.image("sample", 
// {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});



// Sample upload code React

{/* <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}


//Sample image manipulation tag React

{/* <CloudinaryContext cloudName="dhiducw0h">
<Image publicId="sample" format="jpg">
    <Transformation crop="fill" gravity="faces" width="300" height="200"/>
</Image>
</CloudinaryContext> */}

module.exports = multer({ storage });