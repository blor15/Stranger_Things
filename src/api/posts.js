import { fetchResource } from "./utils";
import { REQUEST_BASE } from "./constants";

export const getPosts = (success, fail) => {
  fetchResource({
    url: REQUEST_BASE + '/posts',
    options: {},
    success,
    fail
  });
};