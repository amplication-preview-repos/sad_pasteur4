import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type TagCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  articlesAssociation?: string | null;
  name?: string | null;
};
