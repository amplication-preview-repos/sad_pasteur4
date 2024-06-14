import { Article } from "../article/Article";
import { Comment } from "../comment/Comment";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  articles?: Array<Article>;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  nickname: string | null;
  profile: string | null;
  role?: Role | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
