import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  articles?: ArticleListRelationFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  nickname?: StringNullableFilter;
  profile?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  username?: StringFilter;
};
