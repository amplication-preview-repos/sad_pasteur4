/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArticleListRelationFilter } from "../../article/base/ArticleListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../../role/base/RoleWhereUniqueInput";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => ArticleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ArticleListRelationFilter)
  @IsOptional()
  @Field(() => ArticleListRelationFilter, {
    nullable: true,
  })
  articles?: ArticleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nickname?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  profile?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoleWhereUniqueInput)
  @IsOptional()
  @Field(() => RoleWhereUniqueInput, {
    nullable: true,
  })
  role?: RoleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
