import type { Address } from '../../../prisma/generate/index.js';
import { prisma } from '../../lib/prisma.js';
import type { IaddressInterface } from './address.interface.js';
import type { AddressSchemaDTO } from './address.schema.js';

export class addressRepository implements IaddressInterface {
  async create(data: AddressSchemaDTO): Promise<Address> {
    return prisma.address.create({
      data,
    });
  }
}
