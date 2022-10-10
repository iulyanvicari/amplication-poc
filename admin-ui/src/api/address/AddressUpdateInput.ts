import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  createdBy?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  updatedBy?: string;
  zip?: number | null;
};
