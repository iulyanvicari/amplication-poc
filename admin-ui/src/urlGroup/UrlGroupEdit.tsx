import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UrlTitle } from "../url/UrlTitle";

export const UrlGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
