export interface ICustomAPIEntity {
  id: string;
  name: string;
  applicationId: string;
  createdAt: string;
  createdBy: string;
  method: string;
  requestBody: string;
  requestBodyType: string;
  responseStatusCodes: IResponseStatusCodeEntity[];
  url: string;
  updatedAt: string;
  updatedBy: string;
}

export interface IResponseStatusCodeEntity {
  id: string;
  code: string;
  createdAt?: string;
  createdBy?: string;
  responseType: string;
  updatedAt?: string;
  updatedBy?: string;
  listCount?: number;
  isPrimitiveResponseStatic?: boolean;
  primitiveResponse?: string;
  responseBody?: string;
}
