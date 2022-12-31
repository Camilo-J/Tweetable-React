import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData: object) {
  const { user } = await collectionClient("/auth", {
    body: userData,
  });
  //   const token =
  //   sessionStorage.setItem(tokenKey, token);
  return user;
}

// export async function updateUser(userData) {
//   const { token, ...user } = await collectionClient("/profile", {
//     method: "PATCH",
//     body: userData,
//   });

//   sessionStorage.setItem(tokenKey, token);
//   return user;
// }

export async function getUser(id: number) {
  const { token, ...user } = await collectionClient(`/users/${id}`);

  return user;
}
