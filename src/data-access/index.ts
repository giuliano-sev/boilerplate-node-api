import {User} from '../models';
import {Database} from './database';
import {Mock} from './mock';

export interface IDataAccess {
    user: IUserDataAccess;
}

export interface IUserDataAccess {
    get(): Promise<User[]>;
    get_by_id(user_id: number): Promise<User>;
    get_by_username(username: string): Promise<User>;

    create(new_user: Partial<User>): Promise<User>;
}

export default (use_mock_data = false) => 
    use_mock_data ? new Mock : new Database();