import Comment from "./comment";

class Post {
  id?: number;
  title: string;
  username: string;
  imageSrc?: string;
  comments?: Comment[];
  likes?: string[];
  dislikes?: string[];

  constructor(
    title: string,
    username: string,
    likes: string[],
    dislikes: string[],
    imageSrc?: string,
    id?: number
  ) {
    this.id = id;
    this.title = title;
    this.username = username;
    this.imageSrc = imageSrc;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}

export default Post;
