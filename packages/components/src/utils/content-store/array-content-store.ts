import contentStoreModel, { ContentModelType } from "./index";
import { IAnyType, types } from "mobx-state-tree";


export default function arrayContentStoreModel<DataType, ErrorType>(dataType: IAnyType = types.frozen()): ContentModelType<Array<DataType>, ErrorType> {
  return contentStoreModel<Array<DataType>, ErrorType>(types.array(dataType));
}