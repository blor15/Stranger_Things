import { fetchResource } from './utils';
import { REQUEST_BASE } from './constants';

export const register = (success, fail, user) => {
  fetchResource({
    url: REQUEST_BASE + '/users/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    },
    success,
    fail
  });
};