import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { UrlGroupTitle } from "../urlGroup/UrlGroupTitle";
import { UserTitle } from "../user/UserTitle";

export const UrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Original URL" source="address" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="favico" source="favico" />
        <NumberInput label="Hits" source="hits" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" type="email" />
        <TextInput label="Short URL" source="shortAddress" />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "asd", value: "Asdasasd" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="thumbnail" source="thumbnail" />
        <div />
        <ReferenceArrayInput
          source="urlGroups"
          reference="UrlGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UrlGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
