'use strict';
import multer from 'multer';

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        console.log(req.body,"%%%%%%%%");
        cb(null,('uploads/'+req.body.type))
    },
    filename: (req,file,cb) => {
        let ext = file.originalname
        cb(null,ext)
    }
})

const upload = multer({
    storage : storage,
    fileFilter: function(req,file,callback){
       
        if(file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpeg" || file.mimetype == "video/mp4" ){
            callback(null,true);
        }else{
            callback(null,false);
        }
    },
})

export default upload;