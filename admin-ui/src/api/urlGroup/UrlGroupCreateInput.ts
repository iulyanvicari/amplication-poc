import { UrlCreateNestedManyWithoutUrlGroupsInput } from "./UrlCreateNestedManyWithoutUrlGroupsInput";

export type UrlGroupCreateInput = {
  topic?: string | null;
  topicItems?: UrlCreateNestedManyWithoutUrlGroupsInput;
};
