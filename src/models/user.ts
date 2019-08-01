import {BaseModel} from './base-model';

export class User extends BaseModel {
    static get idColumn(){
        return 'id';
    }

    static get tableName(){
        return 'users';
    }

    id: number;
    username: string;
    password: string;
}