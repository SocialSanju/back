import multer from 'multer';
import express from 'express';

import uploadFile from '../middelware/fileS3Upload.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.png`);
  },
});

const upload = multer({ storage });

uploadRouter.post('/', upload.single('image'), (req, res) => {
  if(req.file) {
    let ext = req.file.originalname;
    const uploadFileName = ext;
    uploadFile(req.file,req.body.type,uploadFileName);
  }  
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
