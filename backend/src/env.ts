import 'dotenv/config';
import { cleanEnv, port, str } from 'envalid';

const env = cleanEnv(process.env, {
	PORT: port(),
	MONGODB_URI: str(),
	CLIENT_URL: str(),
	SESSION_SECRET: str(),
});

export default env;
