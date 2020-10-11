import { Inject, Injectable } from '@nestjs/common';
import { USER_PROVIDER } from 'src/constants';
import { BasicStateEnum } from 'src/types';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(USER_PROVIDER) private userRepository: typeof User) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.userRepository.create(data);
  }

  async get(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  async delete(id: number): Promise<User> {
    const user: User = await this.userRepository.findByPk(id);
    await user.update({ state: BasicStateEnum.DELETED });
    await user.destroy();
    return user;
  }

  async update(data: UpdateUserDto & { username: string }): Promise<User> {
    const { username, ...newFields } = data;
    const user: User = await this.userRepository.findOne({
      where: { username },
    });

    await user.update({ ...newFields });
    return user;
  }
}
