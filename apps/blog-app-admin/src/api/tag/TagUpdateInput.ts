import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type TagUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  articlesAssociation?: string | null;
  name?: string | null;
};
