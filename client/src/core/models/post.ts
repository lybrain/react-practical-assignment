class Post {
  id?: string;
  title: string;
  username: string;
  imageSrc?: string;

  constructor(title: string, username: string, imageSrc?: string, id?: string) {
    this.id = id;
    this.title = title;
    this.username = username;
    this.imageSrc = imageSrc;
  }
}

export default Post;
