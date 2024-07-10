import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  productCode?: StringNullableFilter;
  productName?: StringNullableFilter;
};
