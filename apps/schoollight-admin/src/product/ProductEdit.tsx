import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ProductCode" source="productCode" />
        <TextInput label="ProductName" source="productName" />
      </SimpleForm>
    </Edit>
  );
};
