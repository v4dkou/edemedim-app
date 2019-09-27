import {
  IAnyType,
  IModelType,
  Instance,
  IType,
  ModelActions,
  ModelPropertiesDeclaration,
  ModelPropertiesDeclarationToProperties,
  types
} from "mobx-state-tree";

interface IContentStoreActions<DataType, ErrorType> extends ModelActions {
  setLoading(): void

  setError(error: ErrorType): void

  setData(data: DataType): void
}

interface ContentModelProperties<DataType, ErrorType> extends ModelPropertiesDeclaration {
  isFetching: boolean,
  error: IType<ErrorType, ErrorType, ErrorType>,
  data: IType<DataType, DataType, DataType>
}

export type ContentModelType<DataType, ErrorType> = IModelType<ModelPropertiesDeclarationToProperties<ContentModelProperties<DataType, ErrorType>>, IContentStoreActions<DataType, ErrorType>>

export type ContentStore<DataType, ErrorType> = Instance<ContentModelType<DataType, ErrorType>>

export default function contentStoreModel<DataType, ErrorType>(dataType: IAnyType = types.frozen(), errorType: IAnyType = types.frozen()): ContentModelType<DataType, ErrorType> {
  return types.optional(
    types.model("ContentStore", {
      isFetching: false,
      error: errorType,
      data: dataType
    }).actions((self): IContentStoreActions<DataType, ErrorType> => ({
        setLoading() {
          self.isFetching = true;
          self.error = null;
        },

        setError(error: ErrorType) {
          self.isFetching = false;
          self.error = error;
        },

        setData(data: DataType) {
          self.isFetching = false;
          self.data = data;
        },
      }
    )),
    {} as any) as ContentModelType<DataType, ErrorType>;
}

export function isContentStore<DataType, ErrorType>(data: any): data is ContentStore<DataType, ErrorType> {
  return data &&
    data.hasOwnProperty('isFetching') &&
    data.hasOwnProperty('data') &&
    data.hasOwnProperty('error') &&
    (<ContentStore<DataType, ErrorType>>data).setLoading !== undefined &&
    (<ContentStore<DataType, ErrorType>>data).setData !== undefined &&
    (<ContentStore<DataType, ErrorType>>data).setError !== undefined;
}