import pg from "pg"
import dotenv from "dotenv"

dotenv.config();

const {Pool} = pg;

const dataBaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const connection = new Pool(dataBaseConfig);

export default connection;