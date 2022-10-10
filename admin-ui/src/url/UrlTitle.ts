import { Url as TUrl } from "../api/url/Url";

export const URL_TITLE_FIELD = "name";

export const UrlTitle = (record: TUrl): string => {
  return record.name || record.id;
};
