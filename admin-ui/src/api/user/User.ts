import { Url } from "../url/Url";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  favorites?: Array<Url>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Admin" | "Contributor" | "User" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
