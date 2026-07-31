import fs from 'fs';
import path from 'path';

const folders = [
  'prisma',
  'src/config',
  'src/lib',
  'src/middlewares',
  'src/shared/types',
  'src/utils',
  'src/modules/auth',
  'src/modules/product',
  'src/modules/order',
];

const files = [
  '.env',
  '.env.example',
  '.gitignore',
  'tsconfig.json',
  'README.md',
  'prisma/schema.prisma',
  'src/config/env.ts',
  'src/lib/prisma.ts',
  'src/middlewares/auth.middleware.ts',
  'src/middlewares/error.middleware.ts',
  'src/middlewares/logger.middleware.ts',
  'src/middlewares/validate.middleware.ts',
  'src/shared/types/express.d.ts',
  'src/utils/AppError.ts',
  'src/utils/catchAsync.ts',
  'src/app.ts',
  'src/server.ts',
  // Auth Module
  'src/modules/auth/auth.schema.ts',
  'src/modules/auth/auth.interface.ts',
  'src/modules/auth/auth.repository.ts',
  'src/modules/auth/auth.service.ts',
  'src/modules/auth/auth.controller.ts',
  'src/modules/auth/auth.container.ts',
  'src/modules/auth/auth.route.ts',
  // Product Module
  'src/modules/product/product.schema.ts',
  'src/modules/product/product.interface.ts',
  'src/modules/product/product.repository.ts',
  'src/modules/product/product.service.ts',
  'src/modules/product/product.controller.ts',
  'src/modules/product/product.container.ts',
  'src/modules/product/product.route.ts',
  // Order Module
  'src/modules/order/order.schema.ts',
  'src/modules/order/order.interface.ts',
  'src/modules/order/order.repository.ts',
  'src/modules/order/order.service.ts',
  'src/modules/order/order.controller.ts',
  'src/modules/order/order.container.ts',
  'src/modules/order/order.route.ts',
];

console.log('🚀 Generating setup files...');

folders.forEach((folder) => {
  fs.mkdirSync(folder, { recursive: true });
});

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }
});

console.log('✅ Structure successfully generated!');
