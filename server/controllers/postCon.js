import PostModel from "../models/postMode.js";

export const getPost = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log("Server Data Test: ", posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const data = req.body;
  const newPost = new PostModel(data);
  try {
    await newPost.save(() => res.status(201).json(newPost));
    console.log("post created...");
  } catch (error) {
    res.status(304).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const data = req.body.id;
  const post = PostModel();
  try {
    await post.findByIdAndUpdate({ _id: data, $set: req.body });
    post.save(() => res.send(200).json(post));
    console.log("post edit...");
  } catch (error) {
    res.send(304).json(error.message);
  }
};

export const deletePost = (req, res) => {
  const data = req.body.id;
  const post = PostModel();
  try {
    post.findOneAndDelete(id);
    post.save(() => res.send(200).json(post));
    console.log("post deleted...");
  } catch (error) {
    res.send(304).json(error.message);
  }
};
