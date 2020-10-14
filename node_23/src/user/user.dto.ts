import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BasicStateEnum, UserGenderEnum } from 'src/types';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(UserGenderEnum)
  gender: UserGenderEnum;

  @IsEnum(BasicStateEnum)
  state: BasicStateEnum;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEnum(UserGenderEnum)
  gender?: UserGenderEnum;

  @IsOptional()
  @IsEnum(BasicStateEnum)
  state?: BasicStateEnum;
}
