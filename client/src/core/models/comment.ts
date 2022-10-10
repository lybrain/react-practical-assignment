class Comment {
  id?: number;
  text: string;
  username:string;
  postId:number;
  // likes:string[];
  // dislikes:string[];

  constructor(text: string, username:string, postId:number, id?: number) {
    this.id = id;
    this.text = text;
    this.username = username;
    this.postId = postId;
  }
}

export default Comment;
