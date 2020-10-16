import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql.guard';
import { CurrentUser } from 'src/decorators/gql-user.decorator';
import { IAuthUser } from 'src/types';
import { UpdateUserInput, User } from './user.model';
import { UserService } from './user.service';

@UseGuards(GqlAuthGuard)
@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User, { name: 'user' })
  async getUser(@CurrentUser() user: IAuthUser) {
    return await this.userService.get(user.username);
  }

  @Mutation(returns => User, { name: 'updateUser' })
  async updateUser(
    @Args('userInfo', { type: () => UpdateUserInput })
    userInfo: UpdateUserInput,
    @CurrentUser() user: IAuthUser,
  ) {
    return await this.userService.update({
      ...userInfo,
      username: user.username,
    });
  }

  @Mutation(returns => User, { name: 'deleteUser' })
  async delete(@CurrentUser() user: IAuthUser) {
    return await this.userService.delete(user.username);
  }
}
