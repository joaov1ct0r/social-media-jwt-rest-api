import { Model } from "sequelize";

interface IPost extends Model {
  id: string;
  author: string;
  content: string;
  userId: string;
  likes: string[];
  comments: string[];
}

export default IPost;
