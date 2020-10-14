import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthController } from '../auth.controller';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // TODO: Реализовать эту проверку через глобал гуард
  //   canActivate(context: ExecutionContext) {
  //     const Controller = context.getClass();
  //     if (new Controller() instanceof AuthController) {
  //       return true;
  //     }
  //   }
}
