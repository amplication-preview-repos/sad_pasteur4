import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  content?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
