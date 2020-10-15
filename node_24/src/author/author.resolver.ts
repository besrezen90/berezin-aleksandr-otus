import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql.guard';
import {
  Author,
  Authors,
  AuthorsFilterInput,
  CreateAuthorInput,
  UpdateAuthorInput,
} from './author.model';
import { AuthorService } from './author.service';

@UseGuards(GqlAuthGuard)
@Resolver(of => Authors)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => Authors, { name: 'authors' })
  async getAuthors(
    @Args('filter', {
      type: () => AuthorsFilterInput,
      nullable: true,
    })
    params: AuthorsFilterInput,
  ) {
    return await this.authorService.getAuthors((params = {}));
  }

  @Query(() => Author, { name: 'author' })
  async getAuthor(
    @Args('id', { type: () => Int })
    id,
  ) {
    return await this.authorService.getAuthor(id);
  }

  @Mutation(() => Author, { name: 'updateAuthor' })
  async updateAuthor(
    @Args('authorInfo', { type: () => UpdateAuthorInput })
    authorInfo,
  ) {
    return await this.authorService.updateAuthor(authorInfo);
  }

  @Mutation(() => Author, { name: 'createAuthor' })
  async createAuthor(
    @Args('authorInfo', { type: () => CreateAuthorInput })
    authorInfo,
  ) {
    return await this.authorService.createAuthor(authorInfo);
  }

  @Mutation(() => Author, { name: 'deleteAuthor' })
  async deleteAuthor(
    @Args('id', { type: () => Int })
    id,
  ) {
    return await this.authorService.deleteAuthor(id);
  }
}
