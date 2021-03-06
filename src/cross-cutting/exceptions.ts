// Custom exceptions are defined here

export class InvalidCredentialsError extends Error {
	constructor(message = 'username or password is incorrect') {
		super(message);
	}
}

export class InvalidPayloadError extends Error {
	constructor(message = 'invalid payload') {
		super(message);
	}
}
