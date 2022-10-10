import { SortOrder } from "../../util/SortOrder";

export type UrlOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  favico?: SortOrder;
  hits?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  shortAddress?: SortOrder;
  tags?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
