import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Author from '../models/authorModel.js';

const authorRouter = express.Router();

authorRouter.get('/', expressAsyncHandler(async(req, res) => {
  const sample = await Author.find({});
  res.send(sample);
})
);




export default authorRouter;