import {IUserDataAccess} from "..";
import {User} from "../../models";

export class UserMock implements IUserDataAccess {
    get = () => Promise.resolve(this.users);
    get_by_id = (user_id: number) => Promise.resolve(this.users.find(u => u.id === user_id));
    get_by_username = (username: string) => Promise.resolve(this.users.find(u => u.username === username));

    create = (new_user: Partial<User>) => {
        const user = {
            id: this.users.length,
            ...new_user,
        } as User;

        this.users.push(user);

        return Promise.resolve(user);
    }
    
    private users: User[] = [
        {
            id: 1,
            username: 'user_one',
            password: 'sape',
        }
    ] as Partial<User>[] as User[];
}


