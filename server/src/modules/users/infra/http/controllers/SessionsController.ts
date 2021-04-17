import { Request, Response } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';

interface IUser {
  name: string;
  password?: string;
  email: string;
}

export default class SessionsController {
  public async createSessions(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { email, password } = request.body;

      const authenticateUser = container.resolve(AuthenticateUserService);

      const { user, token } = await authenticateUser.execute({
        email,
        password,
      });
      const userD: IUser = user;

      delete userD.password;

      return response.json({ user, token });
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message });
    }
  }
}
