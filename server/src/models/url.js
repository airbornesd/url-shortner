import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    unique: true,
  },
});

const UrlSchema = mongoose.model('Url', schema);

export default UrlSchema;
