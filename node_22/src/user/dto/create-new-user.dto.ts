import { IsString } from 'class-validator';

export class CreateNewUserDto {
  @IsString()
  userId: string;
}
