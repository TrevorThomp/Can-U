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

const callAPIBasic = (url, auth, handler, errorHandler) => {

  return fetch(`${url}/signin`, {
    method: "POST",
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Basic ${auth}`,
    },
    body: undefined,
  })
  .then(response => response.text())
  .then(data => {
    if(data === '{"error":"Invalid User ID/Password"}'){
      return {loggedIn: false, data: null};
    } 
    else {
      return {loggedIn: true, data: data};
    }
  })
    .catch(e =>
      typeof errorHandler === "function" ? errorHandler(e) : console.error(e)
    );
};

export { callAPI, callAPIBasic };

