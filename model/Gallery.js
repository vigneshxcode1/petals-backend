import mongoose from "mongoose";


const galleryschema = mongoose.Schema({
    publicUrl: { type: String, required: true },
  filename: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const galleryModel = new mongoose.model('bgallermodel',galleryschema)

export default galleryModel;
