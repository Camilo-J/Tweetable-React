import { tokenKey, BASE_URI, Options } from "../config";

export default async function collectionClient(
  endpoint: string,
  { method, headers, body }: Options = {}
) {
  const token = sessionStorage.getItem(tokenKey);

  if (token) {
    headers = {
      Authorization: `${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data, header;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    header = response.headers.get("Authorization");
    if (header) sessionStorage.setItem(tokenKey, header);
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
