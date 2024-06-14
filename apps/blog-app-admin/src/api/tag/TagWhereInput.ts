import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TagWhereInput = {
  article?: ArticleWhereUniqueInput;
  articlesAssociation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
