import { environment } from "src/environments/environment";
const userEndpoint = "user";

const mainAPIPost = (destination, body) =>
  fetch(`${environment.mainAPIUrl}${destination}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

const userAPIPost = (destination, body) =>
  fetch(`${environment.mainAPIUrl}/${userEndpoint}/${destination}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

export { mainAPIPost, userAPIPost };
