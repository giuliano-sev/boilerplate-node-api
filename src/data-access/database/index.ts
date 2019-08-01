import {IDataAccess, IUserDataAccess} from "..";
import {UserDatabase} from "./user";

export class Database implements IDataAccess {
    user: IUserDataAccess;

    constructor(){
        this.user = new UserDatabase;
    }
}