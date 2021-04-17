import { container } from 'tsyringe';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCrypyHashProvider from './implementations/BCrypyHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCrypyHashProvider);
