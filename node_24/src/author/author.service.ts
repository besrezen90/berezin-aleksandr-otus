import { Inject, Injectable } from '@nestjs/common';
import { AUTHOR_PROVIDER, DEFAULT_VALUES } from 'src/constants';
import { CustomCatch } from 'src/decorators/catch.decorator';
import { Movie } from 'src/movie/movie.entity';
import { BasicStateEnum } from 'src/types';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { Author } from './author.entity';
import { AuthorsFilterInput } from './author.model';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(AUTHOR_PROVIDER) private authorRepository: typeof Author,
  ) {}

  @CustomCatch
  async getAuthors({
    limit = DEFAULT_VALUES.DB_DEFAULT_LIMIT,
    offset = DEFAULT_VALUES.DB_OFFSET,
    ...where
  }) {
    let currentLimit = +limit;

    if (currentLimit > DEFAULT_VALUES.DB_MAX_LIMIT) {
      currentLimit = DEFAULT_VALUES.DB_MAX_LIMIT;
    }

    return await this.authorRepository.findAndCountAll({
      where,
      limit: currentLimit,
      offset: +offset,
      distinct: true,
      include: [
        {
          model: Movie,
          as: 'movies',
        },
      ],
    });
  }

  @CustomCatch
  async getAuthor(id: number) {
    return await this.authorRepository.findOne({
      where: { id },
      include: [
        {
          model: Movie,
          as: 'movies',
        },
      ],
    });
  }

  @CustomCatch
  async createAuthor(author: CreateAuthorDto) {
    return await this.authorRepository.create(author);
  }

  @CustomCatch
  async updateAuthor(updateAuthor: UpdateAuthorDto) {
    const { id, ...newFields } = updateAuthor;
    const author: Author = await this.authorRepository.findOne({
      where: { id },
    });

    await author.update({ ...newFields });
    return author;
  }

  @CustomCatch
  async deleteAuthor(id: number) {
    const author: Author = await this.authorRepository.findByPk(id);
    await author.update({ state: BasicStateEnum.DELETED });
    await author.destroy();
    return author;
  }
}
