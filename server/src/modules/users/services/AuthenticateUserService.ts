import { inject, injectable } from 'tsyringe';
import auth from '@config/auth';
import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUser from '@modules/users/models/IUser';
import IUsersRepository from '../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination. aa');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/passoword combination.');
    }

    const { secret, expiresIn } = auth.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
