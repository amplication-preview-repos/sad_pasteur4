import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <TextInput label="articles_association" source="articlesAssociation" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
