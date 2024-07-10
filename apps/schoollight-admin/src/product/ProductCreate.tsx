import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ProductCode" source="productCode" />
        <TextInput label="ProductName" source="productName" />
      </SimpleForm>
    </Create>
  );
};
