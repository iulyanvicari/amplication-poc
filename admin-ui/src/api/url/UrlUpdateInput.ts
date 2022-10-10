import { InputJsonValue } from "../../types";
import { UrlGroupUpdateManyWithoutUrlsInput } from "./UrlGroupUpdateManyWithoutUrlsInput";
import { UserUpdateManyWithoutUrlsInput } from "./UserUpdateManyWithoutUrlsInput";

export type UrlUpdateInput = {
  address?: string;
  description?: string | null;
  favico?: string | null;
  hits?: number | null;
  name?: string;
  owner?: string | null;
  shortAddress?: string;
  tags?: Array<"Asdasasd">;
  thumbnail?: string | null;
  title?: InputJsonValue;
  urlGroups?: UrlGroupUpdateManyWithoutUrlsInput;
  users?: UserUpdateManyWithoutUrlsInput;
};
