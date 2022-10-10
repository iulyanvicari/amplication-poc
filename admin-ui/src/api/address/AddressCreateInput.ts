import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  createdBy?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  updatedBy: string;
  zip?: number | null;
};
