import { ArticleUpdateManyWithoutUsersInput } from "./ArticleUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  articles?: ArticleUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickname?: string | null;
  password?: string;
  profile?: string | null;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
