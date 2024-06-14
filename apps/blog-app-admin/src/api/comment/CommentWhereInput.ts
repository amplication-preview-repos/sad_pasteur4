import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  article?: ArticleWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
