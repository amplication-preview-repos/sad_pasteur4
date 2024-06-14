import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";
import { TagUpdateManyWithoutArticlesInput } from "./TagUpdateManyWithoutArticlesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleUpdateInput = {
  comments?: CommentUpdateManyWithoutArticlesInput;
  content?: string | null;
  published?: boolean | null;
  tags?: TagUpdateManyWithoutArticlesInput;
  tagsAssociation?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
