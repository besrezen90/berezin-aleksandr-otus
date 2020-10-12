import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserGenderEnum } from 'src/types';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsIn([...Object.values(UserGenderEnum)])
  gender: UserGenderEnum;
}

export class UpdateAuthorDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsIn([...Object.values(UserGenderEnum)])
  gender: UserGenderEnum;
}
