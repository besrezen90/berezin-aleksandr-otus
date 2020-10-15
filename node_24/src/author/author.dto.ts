import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
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
  id: number;
  @IsString()
  @IsOptional()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsIn([...Object.values(UserGenderEnum)])
  gender: UserGenderEnum;
}
