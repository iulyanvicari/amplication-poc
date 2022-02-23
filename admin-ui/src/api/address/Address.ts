import { Customer } from "../customer/Customer";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  createdBy: string | null;
  customers?: Array<Customer>;
  id: string;
  state: string | null;
  updatedAt: Date;
  updatedBy: string;
  zip: number | null;
};
