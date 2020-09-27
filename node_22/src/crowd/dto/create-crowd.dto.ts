import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateCrowdDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  readonly total: number;

  @IsUrl()
  @IsNotEmpty()
  readonly url: string;
}
