import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserAuth } from './auth.interfaces';
import { UserAuthDto } from './dto/user.auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<IUserAuth>,
    private readonly jwtService: JwtService, // private readonly userService: UserService,
  ) {}

  async signUp(user: IUserAuth) {
    const { username, password } = user;

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const newUser = new this.userModel({
      username: username.toLowerCase().trim(),
      password: hashedPassword,
    });

    try {
      await newUser.save();

      return true;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signIn(user: IUserAuth) {
    const payload = {
      username: user.username.toLowerCase().trim(),
      sub: user._id,
    };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<IUserAuth | null> {
    const user = await this.userModel.findOne({
      username: username.toLowerCase().trim(),
    });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return null;
    }

    return user;
  }
}
