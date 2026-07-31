import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import {PrismaClient} from "../../prisma/generate/client.js"
import { env } from '../config/env.js';

const adapter = new PrismaMariaDb({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });
