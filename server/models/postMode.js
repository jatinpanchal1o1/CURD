import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creatorName: String,
  progress: Number,
  status: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostModel = mongoose.model("PostModel", postSchema);

export default PostModel;
