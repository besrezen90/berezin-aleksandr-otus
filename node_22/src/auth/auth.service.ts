import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { IUserAuth } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<IUserAuth>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<boolean> {
    const { username, password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ username, password: hashedPassword });

    try {
      await user.save();
      await this.userService.createNewUser({ userId: user._id });
      return true;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signIn(user: IUserAuth) {
    const payload = { username: user.username, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  async validateUser(username: string, pass: string): Promise<IUserAuth> {
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (!valid) {
      return null;
    }

    return user;
  }
}
