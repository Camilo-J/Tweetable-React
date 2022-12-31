export const BASE_URI = "http://127.0.0.1:3000/api/v1";
export const tokenKey = "gitHub-collection-token";
export interface Options {
  method?: string;
  headers?: { Authorization?: string; "Content-Type"?: string };
  body?: {};
}
