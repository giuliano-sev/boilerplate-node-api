import db_factory from '../data-access'
import env, {APP_MODE} from '../cross-cutting/env';

const db = db_factory(env.APP_MODE === APP_MODE.MOCK);

export const get_by_username = async (username: string) => 
    await db.user.get_by_username(username);

