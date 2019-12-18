import {QueryInterface, Sequelize} from 'sequelize';
import {DataType} from 'sequelize-typescript';
import {getTimestampColumns} from '../migration-helper';

module.exports = {
	up: (queryInterface: QueryInterface, sequelize: any) => {
		return queryInterface.createTable('users', {
			id: {
				type: DataType.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: DataType.STRING(255),
				allowNull: false,
			},
			password: {
				type: DataType.STRING(255),
				allowNull: false,
			},
			...getTimestampColumns(true),
		});
	},

	down: (queryInterface: QueryInterface, sequelize: any) => {
		return queryInterface.dropTable('users');
	},
};
