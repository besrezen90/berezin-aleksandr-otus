import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  ValidationPipe,
} from '@nestjs/common';
import { IUserAuth } from './auth.interfaces';
import { AuthService } from './auth.service';
import { UserAuthDto } from './dto/user.auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body(ValidationPipe) user: UserAuthDto): Promise<boolean> {
    return await this.authService.signUp(user as IUserAuth);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return await this.authService.signIn(req.user);
  }
}
