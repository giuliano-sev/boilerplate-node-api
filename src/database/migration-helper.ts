import {QueryInterface, Sequelize} from 'sequelize/types';
import {DataType} from 'sequelize-typescript';

import * as sequelize from 'sequelize';

export const getTimestampColumns = (softDelete = false) => ({
	createdAt: {
		type: DataType.DATE,
		allowNull: false,
		defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
	},
	updatedAt: {
		type: DataType.DATE,
		allowNull: true,
		defaultValue: sequelize.literal('NULL ON UPDATE CURRENT_TIMESTAMP'),
	},
	...(softDelete
		? {
				deletedAt: {
					type: DataType.DATE,
					allowNull: true,
					defaultValue: null,
				},
		  }
		: {}),
});

export const getTimestampColumnsToTable = (queryInterface: QueryInterface, sequelize: any, tableName: string, softDelete = false) =>
	queryInterface
		.addColumn(tableName, 'createdAt', {
			type: DataType.DATE,
			allowNull: false,
			defaultValue: sequelize.NOW,
		})
		.then(() =>
			queryInterface.addColumn(tableName, 'updatedAt', {
				type: DataType.DATE,
				allowNull: true,
				defaultValue: null,
				onUpdate: 'CURRENT_TIMESTAMP',
			})
		)
		.then(() =>
			softDelete
				? Promise.resolve()
				: queryInterface.addColumn(tableName, 'deletedAt', {
						type: DataType.DATE,
						allowNull: true,
						defaultValue: null,
				  })
		);
