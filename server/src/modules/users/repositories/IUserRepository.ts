import IUser from '@modules/users/models/IUser';
import ICreateDTO from '../dtos/ICreateUsersDTO';

export default interface IUsersRepository {
  create(user: ICreateDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  save(user: IUser): Promise<IUser>;
}
