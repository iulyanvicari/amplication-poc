import { JsonValue } from "type-fest";
import { UrlGroup } from "../urlGroup/UrlGroup";
import { User } from "../user/User";

export type Url = {
  address: string;
  createdAt: Date;
  description: string | null;
  favico: string | null;
  hits: number | null;
  id: string;
  name: string;
  owner: string | null;
  shortAddress: string;
  tags?: Array<"Asdasasd">;
  thumbnail: string | null;
  title: JsonValue;
  updatedAt: Date;
  urlGroups?: Array<UrlGroup>;
  users?: Array<User>;
};
