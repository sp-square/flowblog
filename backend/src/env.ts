import 'dotenv/config';
import { cleanEnv, port, str } from 'envalid';

const env = cleanEnv(process.env, {
	PORT: port(),
	MONGODB_URI: str(),
});

export default env;
