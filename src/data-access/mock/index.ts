import {IDataAccess} from "..";
import {UserMock} from "./user";

export class Mock implements IDataAccess {
    user: UserMock;

    constructor(){
        this.user = new UserMock;
    }
}