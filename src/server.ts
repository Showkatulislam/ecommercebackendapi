import app from './app.js';
import { env } from './config/env.js';
import { prisma } from './lib/prisma.js';

async function bootstrap() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to MariaDB/MySQL database successfully.');

    app.listen(env.PORT, () => {
      console.log(`🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start the server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();
