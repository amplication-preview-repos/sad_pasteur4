import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";
import { TagCreateNestedManyWithoutArticlesInput } from "./TagCreateNestedManyWithoutArticlesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleCreateInput = {
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  content?: string | null;
  published?: boolean | null;
  tags?: TagCreateNestedManyWithoutArticlesInput;
  tagsAssociation?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
