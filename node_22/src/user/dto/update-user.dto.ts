import { IsString, IsNotEmpty, IsNumber, IsUrl, IsIn } from 'class-validator';
import { genderEnum } from '../enums';

export class UpdateUserInfoDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsNumber()
  readonly age: number | null;

  @IsUrl()
  @IsNotEmpty()
  readonly url: string;

  @IsIn(Object.values(genderEnum))
  @IsNotEmpty()
  readonly gender: genderEnum;
}
