import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  tagsAssociation?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
