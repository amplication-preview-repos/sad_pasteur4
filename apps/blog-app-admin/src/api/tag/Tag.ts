import { Article } from "../article/Article";

export type Tag = {
  article?: Article | null;
  articlesAssociation: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
