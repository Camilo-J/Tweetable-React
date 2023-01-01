import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials: object) {
  const user = await collectionClient("/auth/sign_in", {
    body: credentials,
  });
  sessionStorage.setItem("id", user.data.id);

  return user;
}

export async function logout() {
  await collectionClient("/auth/sign_out", {
    method: "DELETE",
  });

  sessionStorage.removeItem("id");

  sessionStorage.removeItem(tokenKey);
}
