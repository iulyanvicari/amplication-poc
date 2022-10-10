import { InputJsonValue } from "../../types";
import { UrlGroupCreateNestedManyWithoutUrlsInput } from "./UrlGroupCreateNestedManyWithoutUrlsInput";
import { UserCreateNestedManyWithoutUrlsInput } from "./UserCreateNestedManyWithoutUrlsInput";

export type UrlCreateInput = {
  address: string;
  description?: string | null;
  favico?: string | null;
  hits?: number | null;
  name: string;
  owner?: string | null;
  shortAddress: string;
  tags?: Array<"Asdasasd">;
  thumbnail?: string | null;
  title?: InputJsonValue;
  urlGroups?: UrlGroupCreateNestedManyWithoutUrlsInput;
  users?: UserCreateNestedManyWithoutUrlsInput;
};
