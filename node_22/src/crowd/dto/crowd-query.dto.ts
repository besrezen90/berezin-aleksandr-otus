import { IsIn, IsOptional } from 'class-validator';
import { statusEnum } from '../enums';

export class CrowdQueryDto {
  @IsOptional()
  @IsIn(Object.values(statusEnum))
  readonly status: string;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  readonly order: string;

  @IsOptional()
  @IsIn(['total', 'totalSum', 'created_at', 'updatedAt'])
  readonly sortedBy: string;
}
