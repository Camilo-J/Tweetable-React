import collectionClient from "./collection-client";

export async function createTweet(data: {}) {
  return await collectionClient("/tweets", {
    body: data,
  });
}

export async function removeTweets(id: number) {
  return await collectionClient(`/tweets/${id}`, {
    method: "DELETE",
  });
}

export async function getTweets(): Promise<[]> {
  return await collectionClient(`/tweets`);
}
