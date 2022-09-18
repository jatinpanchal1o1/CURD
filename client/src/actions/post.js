import * as api from "../api/api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../actions/actionTypes/actionTypes";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id, post);

    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
