import Post from "../core/models/post";
import axios from "./base";

export const getPostList = async (page: number): Promise<Post[]> => {
  const result = await axios.get(`post/`); // page/${page}
  return result.data.result;
};

export const getPost = async (id: string): Promise<any> => {
  return await axios.get(`post/${id}/`);
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
