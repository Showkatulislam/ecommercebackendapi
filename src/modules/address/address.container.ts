import { AddressController } from './address.controller..js';
import { addressRepository } from './address.repository.js';
import { addressService } from './address.service.js';

const repo = new addressRepository();
const service = new addressService(repo);
export const addressController = new AddressController(service);
