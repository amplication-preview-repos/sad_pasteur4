import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  tags?: TagListRelationFilter;
  tagsAssociation?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
