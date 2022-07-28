import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Author from '../models/authorModel.js';

const authorRouter = express.Router();

authorRouter.get('/', expressAsyncHandler(async(req, res) => {
  const authors = await Author.find({});
  res.send(authors);
})
);




export default authorRouter;