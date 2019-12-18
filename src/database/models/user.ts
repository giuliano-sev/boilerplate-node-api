import {Model, Table, Column, DataType} from 'sequelize-typescript';

@Table({
	timestamps: true,
	paranoid: true,
	deletedAt: 'deletedAt',
	tableName: 'users',
})
export class User extends Model<User> {
	@Column({type: DataType.STRING(255)})
	username: string;

	@Column({type: DataType.STRING(255)})
	password: string;
}
export default User;
