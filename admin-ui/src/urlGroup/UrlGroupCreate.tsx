import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UrlTitle } from "../url/UrlTitle";

export const UrlGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Topic" source="topic" />
        <ReferenceArrayInput
          source="topicItems"
          reference="Url"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UrlTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
