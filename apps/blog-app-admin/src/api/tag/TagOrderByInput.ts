import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  articleId?: SortOrder;
  articlesAssociation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
