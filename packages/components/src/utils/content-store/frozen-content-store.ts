import contentStoreModel, { ContentModelType } from "./index";

const FrozenContentStoreModel = contentStoreModel();

export default function frozenContentStoreModel<DataType, ErrorType>(): ContentModelType<DataType, ErrorType> {
  return FrozenContentStoreModel as ContentModelType<DataType, ErrorType>;
}