const callAPI = (url, method = "get", body, token, handler, errorHandler) => {
  return fetch(url, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    headers: { 
      "Content-Type": "application/json",
       "Authorization": "Bearer " + token},
    body: body ? JSON.stringify(body) : undefined
  })
    .then(response => response.json())
    .then(data => (typeof handler === "function" ? handler(data) : data))
    .catch(e =>
      typeof errorHandler === "function" ? errorHandler(e) : console.error(e)
    );
};

export { callAPI };
  