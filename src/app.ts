import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { AppError } from './utils/AppError.js';
import { errorMiddlware } from './middlewares/error.middleware.js';
import { loggerMiddleware } from './middlewares/logger.middleware.js';
import authRouter from './modules/auth/auth.route.js';
import cookieParser from 'cookie-parser';
import CategoryRouter from './modules/category/category.route.js';
import productRouter from './modules/product/product.route.js';
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddleware(): void {
    // 1. Security Headers
    this.app.use(helmet());

    // 2. Cross-Origin Resource Sharing
    this.app.use(cors());
    // 3. Body Parsing
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser())

    // 4. HTTP Request Logging (Development/Production)
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('combined'));
    }
  }

  private configureRoutes(): void {
    // Health Check Endpoint
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    // API v1 Routes
    this.app.use('/api/v1/auth', authRouter);
    this.app.use('/api/v1/category', CategoryRouter)
    this.app.use('/api/v1/product',productRouter)

    // 404 Catch-all for unhandled routes (FIXED FOR PATH-TO-REGEXP v8+)
    this.app.use('{*path}', (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(`Route ${req.originalUrl} not found`, 404));
    });
  }

  private configureErrorHandling(): void {
    // Global Centralized Error Handling Middleware
    this.app.use(errorMiddlware);
  }
}

export default new App().app;
