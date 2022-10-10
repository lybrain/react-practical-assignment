import Post from "../core/models/post";
import { CreateCommentArgs } from "../store/post/types";
import axios from "./base";

export const getPostList = async (page: number): Promise<Post[]> => {
  const result = await axios.get(`post/`); // page/${page}
  return result.data.result;
};

export const getPost = async (id: number): Promise<any> => {
  const result = await axios.get(`post/${id}/`);
  return result.data.result;
};

export const createPost = async (
  title: string,
  username: string,
  image: any
): Promise<any> => {
  let res = await axios.post(`post/`, { title: title, username: username });
  const id = res.data.result.id;
  res = await createPostImage(id, image);
  return res.data;
};

export const updatePost = async (post: Post): Promise<any> => {
  const res = await axios.put(`post/${post.id}`, post);
  return res.data.result;
};
export const deletePost = async (id: number): Promise<any> => {
  return await axios.delete(`post/${id}`);
};
export const createComment = async ({
  postId,
  text,
  username,
}: CreateCommentArgs): Promise<any> => {
  const res = await axios.post(`comment`, { text, username, postId });
  return res.data.result;
};

export const createPostImage = async (id: string, image: any): Promise<any> => {
  const formData = new FormData();
  const config = {
    headers: { "content-type": "multipart/form-data" },
    url: `post/${id}/picture`,
    method: "post",
    data: formData,
  };
  formData.append("picture", image);
  const response = await axios(config);
  return response;
};
