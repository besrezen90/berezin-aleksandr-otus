import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql.guard';
import { CurrentUser } from 'src/decorators/gql-user.decorator';
import { IAuthUser } from 'src/types';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(returns => User, { name: 'user' })
  async getUser(@CurrentUser() user: IAuthUser) {
    return this.userService.get(user.username);
  }

  //   @Mutation()
  //   async updateUser() {
  //     return this.userService.update();
  //   }
}
