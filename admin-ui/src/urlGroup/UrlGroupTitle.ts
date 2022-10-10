import { UrlGroup as TUrlGroup } from "../api/urlGroup/UrlGroup";

export const URLGROUP_TITLE_FIELD = "topic";

export const UrlGroupTitle = (record: TUrlGroup): string => {
  return record.topic || record.id;
};
