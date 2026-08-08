import { OrderController } from './order.controller.js';
import { OrderRepository } from './order.repository.js';
import { OrderService } from './order.service.js';
const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
export const orderController = new OrderController(orderService);
