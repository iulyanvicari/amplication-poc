import { Url } from "../url/Url";

export type UrlGroup = {
  createdAt: Date;
  id: string;
  topic: string | null;
  topicItems?: Array<Url>;
  updatedAt: Date;
};
