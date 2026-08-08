import z from 'zod';

export const createAddresSchema = z.object({
  addressLine1: z.string().min(1, 'Addressline is required.'),
  addressLine2: z.string().optional(),
  city: z.string().min(1, 'City is required.'),
  state: z.string().min(1, 'State is required.'),
  pincode: z.string().min(1, 'Pincode is required'),
  phoneNumber: z.string().min(3, 'Phone number is required.'),
  country: z.string(),
});

const AddressSchema = createAddresSchema.extend({
  userId: z.string().uuid('Invalid user Id.'),
});

export type AddressSchemaDTO = z.infer<typeof AddressSchema>;
