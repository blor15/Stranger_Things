export const fetchResource = ({
  fail,
  options,
  success,
  url
}) =>
  fetch(url, options).then(
    res =>
      !res.ok || res.status >= 400 ? fail(res) : res.json().then(success),
    fail
  );