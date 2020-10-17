import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class DonateCrowdDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  readonly sum: number;

  @IsString()
  @IsNotEmpty()
  readonly id: string;
}
