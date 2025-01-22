export interface Route {
  method: string;
  response: Record<string, any>;
  applicationPath: string;
  url: string;
  id: string;
}