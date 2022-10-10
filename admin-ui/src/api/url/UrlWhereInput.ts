import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UrlGroupListRelationFilter } from "../urlGroup/UrlGroupListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UrlWhereInput = {
  address?: StringFilter;
  description?: StringNullableFilter;
  favico?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringNullableFilter;
  shortAddress?: StringFilter;
  thumbnail?: StringNullableFilter;
  title?: JsonFilter;
  urlGroups?: UrlGroupListRelationFilter;
  users?: UserListRelationFilter;
};
