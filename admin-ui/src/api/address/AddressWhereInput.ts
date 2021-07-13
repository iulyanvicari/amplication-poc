import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  updatedBy?: StringFilter;
  zip?: IntNullableFilter;
};