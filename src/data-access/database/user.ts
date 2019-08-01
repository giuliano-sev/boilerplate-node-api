import {IUserDataAccess} from "..";
import {User} from "../../models";

export class UserDatabase implements IUserDataAccess {
    get = async () => await User.query();
    get_by_id = async (user_id: number) => await User.query().findById(user_id);
    get_by_username = async (username: string) => await User.query().findOne({username});

    create = async (new_user: Partial<User>) => await User.query().upsertGraphAndFetch(new_user);
}