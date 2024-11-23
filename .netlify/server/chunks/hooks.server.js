import { P as PUBLIC_POCKETBASE_URL } from "./public.js";
import PocketBase from "pocketbase";
const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  const response = await resolve(event);
  return response;
};
export {
  handle
};
