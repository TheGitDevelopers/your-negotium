import { environment } from "src/environments/environment";

const mainAPIPost = (destination, body) =>
  fetch(`${environment.mainAPIUrl}${destination}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

export { mainAPIPost };
