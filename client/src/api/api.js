import axios from "axios";

const url = "http://localhost:8000/post";

export const fetchPost = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
