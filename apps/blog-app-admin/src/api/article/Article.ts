import { Comment } from "../comment/Comment";
import { Tag } from "../tag/Tag";
import { User } from "../user/User";

export type Article = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  tags?: Array<Tag>;
  tagsAssociation: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
