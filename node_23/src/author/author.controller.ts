import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorService } from './author.service';

@UsePipes(ValidationPipe)
@Controller('api/author')
@UseGuards(JwtAuthGuard)
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Get()
  async getAuthors(@Query() params: { [key: string]: string }) {
    return await this.authorService.getAuthors(params);
  }

  @Get(':id')
  async getAuthor(@Param('id', ParseIntPipe) id: number) {
    return await this.authorService.getAuthor(id);
  }

  @Post()
  async createAuthor(@Body() author: CreateAuthorDto) {
    return await this.authorService.createAuthor(author);
  }

  @Put()
  async updateAuthor(@Body() author: UpdateAuthorDto) {
    return await this.authorService.updateAuthor(author);
  }

  @Delete(':id')
  async deleteAuthor(@Param('id', ParseIntPipe) id: number) {
    return await this.authorService.deleteAuthor(id);
  }
}
