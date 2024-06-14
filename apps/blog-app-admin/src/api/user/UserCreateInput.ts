import { ArticleCreateNestedManyWithoutUsersInput } from "./ArticleCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  articles?: ArticleCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickname?: string | null;
  password: string;
  profile?: string | null;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
