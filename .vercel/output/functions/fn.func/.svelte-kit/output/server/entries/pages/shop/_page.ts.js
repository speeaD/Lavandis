import { r as redirect } from "../../../chunks/index.js";
const load = async () => {
  throw redirect(301, "/shop/all");
};
export {
  load
};
