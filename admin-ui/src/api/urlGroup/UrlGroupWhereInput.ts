import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlListRelationFilter } from "../url/UrlListRelationFilter";

export type UrlGroupWhereInput = {
  id?: StringFilter;
  topic?: StringNullableFilter;
  topicItems?: UrlListRelationFilter;
};
