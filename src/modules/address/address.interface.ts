import type { Address } from '../../../prisma/generate/index.js';
import type { AddressSchemaDTO } from './address.schema.js';

export interface IaddressInterface {
  create(data: AddressSchemaDTO): Promise<Address>;
}
