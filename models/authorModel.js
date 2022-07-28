import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
{
   name: { type: String, required: true },
   logo: { type: String, required: true },
 
}, 
   {
      timestamps: true,
   }
);
const Author = mongoose.model('Author', authorSchema);
export default Author;
