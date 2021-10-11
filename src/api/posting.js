import { fetchResource } from "./utils";
import { REQUEST_BASE } from "./constants";

export const posting = (success, fail, post) => {
    fetchResource({
      url: REQUEST_BASE + '/posts',
      options: {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ post })
      },
      success,
      fail
    });
  };