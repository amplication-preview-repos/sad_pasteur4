/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Tag } from "./Tag";
import { TagCountArgs } from "./TagCountArgs";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagFindUniqueArgs } from "./TagFindUniqueArgs";
import { CreateTagArgs } from "./CreateTagArgs";
import { UpdateTagArgs } from "./UpdateTagArgs";
import { DeleteTagArgs } from "./DeleteTagArgs";
import { Article } from "../../article/base/Article";
import { TagService } from "../tag.service";
@graphql.Resolver(() => Tag)
export class TagResolverBase {
  constructor(protected readonly service: TagService) {}

  async _tagsMeta(
    @graphql.Args() args: TagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tag])
  async tags(@graphql.Args() args: TagFindManyArgs): Promise<Tag[]> {
    return this.service.tags(args);
  }

  @graphql.Query(() => Tag, { nullable: true })
  async tag(@graphql.Args() args: TagFindUniqueArgs): Promise<Tag | null> {
    const result = await this.service.tag(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tag)
  async createTag(@graphql.Args() args: CreateTagArgs): Promise<Tag> {
    return await this.service.createTag({
      ...args,
      data: {
        ...args.data,

        article: args.data.article
          ? {
              connect: args.data.article,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Tag)
  async updateTag(@graphql.Args() args: UpdateTagArgs): Promise<Tag | null> {
    try {
      return await this.service.updateTag({
        ...args,
        data: {
          ...args.data,

          article: args.data.article
            ? {
                connect: args.data.article,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tag)
  async deleteTag(@graphql.Args() args: DeleteTagArgs): Promise<Tag | null> {
    try {
      return await this.service.deleteTag(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Article, {
    nullable: true,
    name: "article",
  })
  async getArticle(@graphql.Parent() parent: Tag): Promise<Article | null> {
    const result = await this.service.getArticle(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
