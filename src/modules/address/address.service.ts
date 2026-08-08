import type { IaddressInterface } from './address.interface.js';
import type { AddressSchemaDTO } from './address.schema.js';

export class addressService {
  constructor(private repo: IaddressInterface) {}
  async create(data: AddressSchemaDTO) {
    return await this.repo.create(data);
  }
}
