import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    SignedUser = "Signed User",
    PublicUser = "Public User"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });