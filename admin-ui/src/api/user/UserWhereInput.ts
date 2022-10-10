import { UrlListRelationFilter } from "../url/UrlListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  favorites?: UrlListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Admin" | "Contributor" | "User";
  username?: StringFilter;
};
