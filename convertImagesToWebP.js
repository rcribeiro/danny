/*
Do this before build
 npm install imagemin-mozjpeg
 npm install imagemin-pngquant
 npm install imagemin imagemin-webp
 node convertImagesToWebP.js
*/
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {
    const files = await imagemin(['./public/images/*.{jpg,png}'], {
        destination: './public/images/webP',
        plugins: [
            imageminMozjpeg(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e ?>, destinationPath: 'build/images/foo.jpg'}, ?]
})();