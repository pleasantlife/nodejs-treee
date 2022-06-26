import { DataSource } from 'typeorm';
import 'dotenv/config';
import Post from './entity/post';
import User from './entity/user';
import Comment from './entity/comment';

const isDev: boolean = process.env.NODE_ENV === 'development';
const port: number = Number(process.env.SQL_PORT);

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.HOST,
  port,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB_NAME,
  synchronize: isDev ? true : false,
  logging: isDev ? false : true,
  entities: [Post, User, Comment],
});
