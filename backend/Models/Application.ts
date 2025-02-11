export interface IApplicationEntity {
  id: string;
  createdAt: string;
  createdBy: string;
  description: string;
  name: string;
  path: string;
  updatedAt: string;
  updatedBy: string;
  apiCount?: number;
  mockApiList?: ICustomAPIEntity[];
  swagger?: string;
}