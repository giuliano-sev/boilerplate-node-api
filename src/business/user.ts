import {User} from '../database/models/user';

export const getById = async (id: number): Promise<User> => await User.findByPk(id);

export const getByUsername = async (username: string): Promise<User> => await User.findOne({where: {username}});

export const getUsers = async (): Promise<User[]> => await User.findAll();
